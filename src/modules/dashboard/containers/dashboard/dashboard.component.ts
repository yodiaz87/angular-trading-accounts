import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Account} from '../../models/account.model';
import {AccountService} from '../../services/account.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {LoadAccountsEvent} from '../../models/events.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {


  accounts$: Observable<Account[]>;
  count = 3;
  total = 0;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts$ = this.accountService.getAccounts(this.count).pipe(
      map(resp => resp.accounts)
    );
  }

  loadAccounts(loadAccountEvent: LoadAccountsEvent) {
    this.accounts$ = this.accountService
      .getAccounts(loadAccountEvent.count, loadAccountEvent.orderAscendByCash, loadAccountEvent.orderAscendByAccount)
      .pipe(
        tap(r => this.total = r.total),
        map(resp => resp.accounts)
      );
  }


}





