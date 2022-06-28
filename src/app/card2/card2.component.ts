import { Component, OnInit } from '@angular/core';
import { MsgserviceService } from '../appServices/msgservice.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttonClick(){
    const msgServices = new MsgserviceService();
    msgServices.messageAlert();
  }
}
