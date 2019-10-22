import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1-detail4',
  templateUrl: 'tab1-detail4.page.html',
  styleUrls: ['tab1-detail4.page.scss']
})
export class Tab1Detail4Page {


  public _dataK: any={};
  constructor() {}

  pesan(){
    console.log(this._dataK);
  }


}
