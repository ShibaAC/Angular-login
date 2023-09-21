import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GirdDataService {
  private rowData:any [] = [
    { name: '華安', email: 'test1@gmail.com', pwd: '123456' },
    { name: '秋香', email: 'test2@gmail.com', pwd: '654321' },
  ];
  constructor() { 

  }

  addData(data:any){
    this.rowData.push(data)
  }

  getRowData() {
    // console.log('123')
    return this.rowData;
  }

  push(data:any){
    this.rowData.push(data)
  }
}
