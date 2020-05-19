import {Injectable} from '@angular/core';
import {DATA} from '../mock-data/data.mock';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {
  }

  getAccounts() {
    return of(DATA);
  }
}
