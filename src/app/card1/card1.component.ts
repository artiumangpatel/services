import { Component, OnInit } from '@angular/core';
import { MsgserviceService } from '../appServices/msgservice.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 
  buttonClick(){
    const msgServices = new MsgserviceService();
    msgServices.messageAlert();
  }


}
