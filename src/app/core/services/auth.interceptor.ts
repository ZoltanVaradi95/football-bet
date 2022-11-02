import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    readonly authToken = '059453cf40d74859a3562b24752c60e7';

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.authToken) {
            request = request.clone({
                setHeaders: { 'X-Auth-Token': this.authToken }
            });
        }

        return next.handle(request).pipe(
            catchError((err) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        // redirect user to the logout page
                    }
                }
                return throwError(() => err);
            })
        )
    }
}