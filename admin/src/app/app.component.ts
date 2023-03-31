import { Component } from '@angular/core';
import { UserRegisterServiceService } from './services/user-register-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';
  // constructor(private user :UserRegisterServiceService){}
  // ngOnInIt():void{
  //   this.user.reloadUser()
  // }
}
