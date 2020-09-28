import { Global } from '../../models/global';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authstartabout implements CanActivate {
  constructor(private _global:Global, private _router:Router){
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._global.isUserLanguageSet()){             
            this._router.navigate(['/about']);
        }else{
          return true;
        }
  } 
 
}
