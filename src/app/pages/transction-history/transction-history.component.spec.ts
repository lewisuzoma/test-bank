import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionHistoryComponent } from './transction-history.component';

describe('TransctionHistoryComponent', () => {
  let component: TransctionHistoryComponent;
  let fixture: ComponentFixture<TransctionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransctionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransctionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
