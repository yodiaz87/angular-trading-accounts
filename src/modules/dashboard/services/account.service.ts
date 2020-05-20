import {Injectable} from '@angular/core';
import {DATA} from '../mock-data/data.mock';
import {Observable, of} from 'rxjs';
import {AccountResponse} from '../models/account.model';
import {Account} from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {
  }

  getAccounts(count: number, orderedByCash = 1, orderedByAccount = 0): Observable<AccountResponse> {
    const data = {...DATA};

    let accounts: Account[];
    if (orderedByCash) {
      accounts = data.accounts.sort(this.orderByCash);

      if (orderedByCash > 1) {
        accounts = accounts.reverse();
      }
    } else {

      accounts = data.accounts.sort(this.orderByAccount);

      if (orderedByAccount > 1) {
        accounts = accounts.reverse();
      }

    }


    data.accounts = accounts.slice(0, count);
    return of(data);
  }

  private orderByCash(a: Account, b: Account) {
    const aTotal = a.totalCash.split(',').join('').split('.').join('');
    const bTotal = b.totalCash.split(',').join('').split('.').join('');
    if (parseInt(aTotal, 10) < parseInt(bTotal, 10)) {
      return -1;
    }
    if (parseInt(aTotal, 10) > parseInt(bTotal, 10)) {
      return 1;
    }

    // names must be equal
    return 0;
  }

  private orderByAccount(a: Account, b: Account) {
    if (parseInt(a.code, 10) < parseInt(b.code, 10)) {
      return -1;
    }
    if (parseInt(a.code, 10) > parseInt(b.code, 10)) {
      return 1;
    }

    // names must be equal
    return 0;
  }

}
