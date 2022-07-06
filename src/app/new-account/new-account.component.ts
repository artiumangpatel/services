import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../appServices/account.service';
import { LoggingServiceService } from '../appServices/logging-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[AccountService,LoggingServiceService]
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded  = new EventEmitter <{name:string,status:string}>();
  constructor(private loggingservice:LoggingServiceService,
    private accountService:AccountService) { this.accountService.statusUpdated.subscribe((status:string) => alert('new Status:'+status));}

  ngOnInit(): void {
  }
  onCreateAccount(accountName:string,accountStatus:string){
    //  this.accountAdded.emit({name:accountName,status:accountStatus})
    // console.log('a server status changed,new States:' + accountStatus);
    this.loggingservice.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName,accountStatus)
  }

}