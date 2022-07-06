import { Component, OnInit } from '@angular/core';
import { AccountService } from './appServices/account.service';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'services';
  accounts:{name:string,status:string}[]=[];
  constructor(private accountsService:AccountService){}
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
    console.log('ng on init', this.accounts);
  }
// account=[{name:'master',status:'active'},
//  {name:'test',status:'inactive'}];
  
//   onAccountAdded(newAccount:{ name:string; status:string;})
// {
//   this.account.push(newAccount);
// }
// onStatusChanged(updateInfo:{id:number,newStatus:string})
// {
//   this.account[updateInfo.id].status=updateInfo.newStatus;
// }


}