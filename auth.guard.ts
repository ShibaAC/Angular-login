import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private cookieService: CookieService , private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.checkToken();
  }

  private checkToken(): boolean {
    const userDataToken = this.cookieService.get('userData');
    if (userDataToken) {
      // 如果存在 userData token才可以放行
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
