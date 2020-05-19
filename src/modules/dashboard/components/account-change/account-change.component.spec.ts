import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountChangeComponent } from './account-change.component';

describe('AccountChangeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AccountChangeComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AccountChangeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'trading-dashboard'`, () => {
    const fixture = TestBed.createComponent(AccountChangeComponent);
    const app = fixture.componentInstance;
  });

});
