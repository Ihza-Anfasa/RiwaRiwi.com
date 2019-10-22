import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1-detail2',
  templateUrl: 'tab1-detail2.page.html',
  styleUrls: ['tab1-detail2.page.scss']
})
export class Tab1Detail2Page {


  public _dataK: any={};
  constructor() {}

  
  pesan(){
    console.log(this._dataK);


}

}