import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  // flag:any
  constructor(private serviceObj:DataService){}
  canActivate():boolean{
    // var token=localStorage.getItem('token');
      if (this.serviceObj.getlogin()){
        return true;
      }
      else{
        return false;
      }
   
   
  }
    
  }
  

