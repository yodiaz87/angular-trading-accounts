import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-account-change',
  templateUrl: './account-change.html',
  styleUrls: ['./account-change.scss']
})
export class AccountChangeComponent {

  @Input() cashTotal = 0;
  @Input() percent = 0;
  @Input() change = 0;
}



