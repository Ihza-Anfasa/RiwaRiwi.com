import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1-detail3',
  templateUrl: 'tab1-detail3.page.html',
  styleUrls: ['tab1-detail3.page.scss']
})
export class Tab1Detail3Page {


  public _dataK: any={};
  constructor() {}


  pesan(){
    console.log(this._dataK);
  }


}
