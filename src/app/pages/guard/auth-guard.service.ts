import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) =>
      this.authService.checkToken().then((x) => {
        this.authService
          .UsuarioEstaAutenticado()
          .then((status) => {
            const redirect: string = state.root.queryParams['redirect'];
            let blnUnAuthorize = !status;

            if (blnUnAuthorize) {
              const navigationExtras = redirect ? { queryParams: { redirect } } : {};
              this.router.navigate(['login'], navigationExtras);
            }

            resolve(status);
          })
          .catch(() => {
            this.router.navigate(['login']);
            resolve(false);
          });
      })
    );
  }
}
