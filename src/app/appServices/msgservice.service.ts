import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgserviceService {

  messageAlert(){
    alert("Thanks for subscribe");
  }
  constructor() { }
  
}
