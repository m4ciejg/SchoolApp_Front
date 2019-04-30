import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {
  

  constructor() { }
  // This service will check if the session has valid username and basicAuth String,
  // then it will update the headers of all outgoing HTTP requests. 
  // We implement the interceptor by extending the HttpInterceptor. 
  intercept(req: HttpRequest<any>, next: HttpHandler){
    if(sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')){
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')
        }
      });
    }

    return next.handle(req);
  }
}
