import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegisteredCardsComponent } from './list-registered-cards.component';

describe('ListRegisteredCardsComponent', () => {
  let component: ListRegisteredCardsComponent;
  let fixture: ComponentFixture<ListRegisteredCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegisteredCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegisteredCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
