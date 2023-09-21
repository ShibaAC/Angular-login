import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { GirdDataService } from '../gird-data.service'; 
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myform!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private gridDataservice: GirdDataService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myform = this.fb.group({
      email: ['', Validators.email],
      pwd: ['', Validators.required],
    });
    
  }

  onSubmit(event:any) {
    // 把grid的資料抓出來
    const loginData = this.gridDataservice.getRowData();
  
    // 把表單輸入的資料存起來
    const formData = this.myform.value;
  
    // 宣告一個用來比對的
    const matchData = [];
    
    for (const item of loginData) {
      if (item.email === formData.email && item.pwd === formData.pwd) {
        // 如果有配對成功的話把它推進matchData內
        matchData.push(item);
      }
    }
    
    // console.log('Matching Data:', matchData);

    if (matchData) {
      //設一個30秒cookie
      this.cookieService.set('userData', JSON.stringify(formData), 0.00034722222);
      //導向grid
      this.router.navigate(['/grid']);

    }
  }
  
  navigateToForm(event:any){
    event.stopPropagation();
    this.router.navigate(['/login/forms']);
  }
}
