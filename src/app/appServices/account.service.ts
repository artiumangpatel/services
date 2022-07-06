import { EventEmitter, Injectable } from '@angular/core';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   

  accounts=[{name:'master',status:'active'},
           {name:'test',status:'inactive'}];

 constructor(private loggingService:LoggingServiceService)    {}
 statusUpdated = new EventEmitter<string>();
  
 addAccount(name:string,status:string){
  console.log('here in service', name, status);
  this.accounts.push({name:name,status:status});
  // this.loggingService.logStatusChange(status);
  }
  updateStatus(id:number,status:string){
    this.accounts[id].status=status;
    console.log('here in service to upadate status', this.accounts);
    // this.loggingService.logStatusChange(status);
  }
 
}
