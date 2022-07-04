import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { MsgserviceService } from '../appServices/msgservice.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private _msgservice:DesignutilityService) { }
  
  products : any = {};

  ngOnInit() {
 this.products = this._msgservice.product;
 console.log(this.products);

  } 
  buttonClick(){
    this._msgservice.messageAlert();
    // const msgServices = new MsgserviceService();
    // msgServices.messageAlert();
  }




}
