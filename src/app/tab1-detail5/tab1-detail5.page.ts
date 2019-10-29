import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1-detail5',
  templateUrl: 'tab1-detail5.page.html',
  styleUrls: ['tab1-detail5.page.scss']
})
export class Tab1Detail5Page {


  public _dataK: any={};
  constructor() {}

  pesan(){
    console.log(this._dataK);
  }


}
