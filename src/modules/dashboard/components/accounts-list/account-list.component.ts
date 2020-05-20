import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Account} from '../../models/account.model';
import {LoadAccountsEvent} from '../../models/events.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.html',
  styleUrls: ['./account-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountListComponent {

  @Input() accounts: Account[];
  @Input() total = 0;
  @Input() count = 3;

  @Output() loadAccountsEmitter: EventEmitter<LoadAccountsEvent> = new EventEmitter<LoadAccountsEvent>();

  orderAscendByCash = 1;
  orderAscendByAccount = 0;

  constructor() {}

  orderAscendByCashHandler() {
    this.orderAscendByAccount = 0;
    const newVal = this.orderAscendByCash + 1;
    this.orderAscendByCash = (newVal > 2) ? 1 : newVal;

    this.loadAccountsEmitter.emit({
      count: this.count,
      orderAscendByCash: this.orderAscendByCash,
      orderAscendByAccount: this.orderAscendByAccount
    });
  }

  orderAscendByAccountHandler() {
    this.orderAscendByCash = 0;
    const newVal = this.orderAscendByAccount + 1;
    this.orderAscendByAccount = (newVal > 2) ? 1 : newVal;

    this.loadAccountsEmitter.emit({
      count: this.count,
      orderAscendByCash: this.orderAscendByCash,
      orderAscendByAccount: this.orderAscendByAccount
    });

  }

  loadMore(event) {
    event.preventDefault();
    this.count += this.count;
    this.loadAccountsEmitter.emit({
      count: this.count,
      orderAscendByCash: this.orderAscendByCash,
      orderAscendByAccount: this.orderAscendByAccount
    });
  }

}



