import { Injectable, Injector } from '@angular/core';
import { DataService } from './data.service';
import { HttpInterceptor } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any){
    let auth=this.injector.get(DataService)
    let tokenizedReq=req.clone(
      {
        setHeaders:{
          Authorisation:`Bearer ${auth.gettoken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)
  }
}
