import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.html',
  styleUrls: ['./account-list.scss']
})
export class AccountListComponent implements OnInit {

  accounts$: Observable<Account[]> = of([]);

  orderAscendByCash = 1;
  orderAscendByAccount = 0;

  count = 3;
  total = 0;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts$ = this.accountService.getAccounts(this.count).pipe(
      map(resp => resp.accounts)
    );
  }

  orderAscendByCashHandler() {
    this.orderAscendByAccount = 0;
    const newVal = this.orderAscendByCash + 1;
    this.orderAscendByCash = (newVal > 2) ? 1 : newVal;

    this.accounts$ = this.accountService.getAccounts(this.count, this.orderAscendByCash, this.orderAscendByAccount).pipe(
      tap(r => this.total = r.total),
      map(resp => resp.accounts)
    );
  }

  orderAscendByAccountHandler() {
    this.orderAscendByCash = 0;
    const newVal = this.orderAscendByAccount + 1;
    this.orderAscendByAccount = (newVal > 2) ? 1 : newVal;

    this.accounts$ = this.accountService.getAccounts(this.count, this.orderAscendByCash, this.orderAscendByAccount).pipe(
      map(resp => resp.accounts)
    );

  }

  loadMore(event) {
    event.preventDefault();
    this.count += this.count;
    this.accounts$ = this.accountService.getAccounts( this.count, this.orderAscendByCash, this.orderAscendByAccount).pipe(
      tap(r => this.total = r.total),
      map(resp => resp.accounts)
    );
  }

}



