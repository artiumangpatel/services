import { Injectable } from '@angular/core';

@Injectable()
export class DesignutilityService {

  messageAlert(){
    alert("Thanks for subscribe");
  }
  constructor() { }

  product=[{name:"Mobile",id:"001"},{name:"laptop",id:"002"},{name:"tv",id:"003"}];
}
//,{name:"laptop",id:"002"},{name:"tv",id:"003"}