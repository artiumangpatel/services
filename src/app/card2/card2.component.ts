import { Component, OnInit } from '@angular/core';
import { MsgserviceService } from '../appServices/msgservice.service';

import { DesignutilityService } from '../appServices/designutility.service';
@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgservice:DesignutilityService) { }
   //product="test";
   products={};
  ngOnInit(): void {
    this.products=this._msgservice.product;
 console.log(this.products);
  }
  buttonClick(){
    this._msgservice.messageAlert();
    // const msgServices = new MsgserviceService();//without dependency injection make instance
    // msgServices.messageAlert();
  }
}
