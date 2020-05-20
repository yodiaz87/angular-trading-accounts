import { Component, Input } from '@angular/core';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account-change',
  templateUrl: './account-change.html',
  styleUrls: ['./account-change.scss'],
})
export class AccountChangeComponent {

  @Input() account: Account;

}



