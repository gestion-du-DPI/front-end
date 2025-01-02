import {
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpClient,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


export function InterceptorFn(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authService = new AuthService(inject(HttpClient), inject(Router));
  const token = authService.getToken();

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  }
  return next(req);
}