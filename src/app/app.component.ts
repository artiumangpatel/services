import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
   account=[{name:'master',status:'active'},{
    name:'test',status:'inactive'
  }];
  
  onAccountAdded(newAccount:{ name:string; status:string;})
{
  this.account.push(newAccount);
}
onStatusChanged(updateInfo:{id:number,newStatus:string})
{
  this.account[updateInfo.id].status=updateInfo.newStatus;
}


}
