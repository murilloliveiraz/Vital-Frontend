import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  downloadFile(url: string, filename: string) {
    this.http.get(url, {
        responseType: 'blob',
        headers: new HttpHeaders({ skipInterceptor: '' })
    }).subscribe({
        next: (blob) => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
            setTimeout(() => {
              link.remove();
          }, 100);
        },
        error: (err) => console.error('Erro ao baixar o arquivo:', err)
    });
}

}
