import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRegisteredCardsComponent } from './delete-registered-cards.component';

describe('DeleteRegisteredCardsComponent', () => {
  let component: DeleteRegisteredCardsComponent;
  let fixture: ComponentFixture<DeleteRegisteredCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRegisteredCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRegisteredCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
