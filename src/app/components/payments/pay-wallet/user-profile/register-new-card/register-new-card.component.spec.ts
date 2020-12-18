import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNewCardComponent } from './register-new-card.component';

describe('RegisterNewCardComponent', () => {
  let component: RegisterNewCardComponent;
  let fixture: ComponentFixture<RegisterNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterNewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
