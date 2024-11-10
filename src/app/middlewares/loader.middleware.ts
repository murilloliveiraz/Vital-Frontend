import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, finalize, map } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from "../services/auth.service";

@Injectable()
export class HTTPStatus {
    private requestInFlight$: BehaviorSubject<boolean>;
    constructor() {
        this.requestInFlight$ = new BehaviorSubject<boolean>(false);
    }

    setHttpStatus(inFlight: boolean) {
        this.requestInFlight$.next(inFlight);
    }
    getHttpStatus(): Observable<boolean> {
        return this.requestInFlight$.asObservable();
    }
}

@Injectable()
export class LoaderMiddleware implements HttpInterceptor {
    private _requests = 0;

    constructor(
        private spinner: NgxSpinnerService,
        private authService: AuthService,
        private router: Router,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // Only increment requests if this is the first request
        if (this._requests === 0) {
            this.spinner.show();
        }
        ++this._requests;

        let headers = req.headers;

        if (req.url.includes('api.ipify.org')) {
            headers = headers.set("Content-Type", "application/json");
        } else if (req.body instanceof FormData) {
            headers = headers.set("Authorization", "Bearer " + this.authService.getToken);
        } else {
            headers = headers
                .set("Accept", "application/json")
                .set("Content-Type", "application/json")
                .set("Authorization", "Bearer " + this.authService.getToken);
        }

        const request = req.clone({ headers });

        return next.handle(request).pipe(
            map((event) => event),
            catchError((error) => {
                if (error.status === 401) {
                    this.router.navigate(["/login"]);
                }
                return throwError(() => new Error(error.message));
            }),
            finalize(() => {
                --this._requests;
                if (this._requests === 0) {
                    this.spinner.hide();
                }
            })
        );
    }
}
