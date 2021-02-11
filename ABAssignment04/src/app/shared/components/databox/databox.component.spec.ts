import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataboxComponent } from './databox.component';

describe('DataboxComponent', () => {
  let component: DataboxComponent;
  let fixture: ComponentFixture<DataboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
