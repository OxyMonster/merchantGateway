import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletBallancePayComponent } from './wallet-ballance-pay.component';

describe('WalletBallancePayComponent', () => {
  let component: WalletBallancePayComponent;
  let fixture: ComponentFixture<WalletBallancePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletBallancePayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletBallancePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
