import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.isLoggedIn()){
      let newRequest = request.clone({
        setHeaders:{
         Authorization:`Bearer ${this.authService.getToken()}`
        }
      });
      return next.handle(newRequest);
    }
    // else{}
    return next.handle(request);
  }
}
