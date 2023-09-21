import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { GirdDataService } from 'src/app/gird-data.service';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder } from '@angular/forms';  // 確保這裡有相關的導入
import { Router } from '@angular/router';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  //宣告一個變數 !是跟ts等等會初始化
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder , private gridDataservice: GirdDataService , private cookieService: CookieService , private router:Router) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:['' , Validators.required],
      email:[''  , Validators.email],
      pwd:['' , [Validators.maxLength(20) , Validators.minLength(5), Validators.required]]
    })
  }


  onSubmit() {
    if (this.contactForm.valid) { // 檢查表單是不是有效
      //把表單的資料存進formData
      const formData = this.contactForm.value;
      //有效的話呼叫service內的addData()然後傳入表單的資料
      this.gridDataservice.addData(formData);
      //設一個叫userDara的cookie，時間設30秒測試
      this.cookieService.set('userData', JSON.stringify(formData), 0.00034722222);
      //導向gird
      this.router.navigate(['/grid']);
    } else {}
  }
  
  
}
