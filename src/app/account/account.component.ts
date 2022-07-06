import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../appServices/account.service';
import { LoggingServiceService } from '../appServices/logging-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[AccountService,LoggingServiceService]
})
export class AccountComponent implements OnInit {
 @Input() account:{ name: string; status: string; } | any;
 @Input() id:number|any;
//  @Output() statusChanged =new EventEmitter<{id:number,newStatus:string}>();
constructor(private loggingservice:LoggingServiceService,
  private accountService:AccountService) { }
 onSetTo(status:string){
  this.accountService.updateStatus(this.id,status);
  this.loggingservice.logStatusChange('changed ' + status);
  // this.statusChanged.emit({id:this.id,newStatus:status});
  //console.log('A server status changed ,new Status:'+status);
 }
  

  ngOnInit(): void {
  }

}