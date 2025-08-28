import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecordComponent } from './show-record.component';

describe('ShowRecordComponent', () => {
  let component: ShowRecordComponent;
  let fixture: ComponentFixture<ShowRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
