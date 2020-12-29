
import { Component } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accounts';

  constructor(
    private accountService: AccountsService
    ){

      this. accountService.getCuentas().subscribe(resp => {
        console.log(resp)
      })
    }
}

