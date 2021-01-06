import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFailComponent } from './page-fail.component';

describe('PageFailComponent', () => {
  let component: PageFailComponent;
  let fixture: ComponentFixture<PageFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
