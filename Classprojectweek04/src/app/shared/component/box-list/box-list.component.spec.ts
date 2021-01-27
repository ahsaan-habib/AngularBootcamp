import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxListComponent } from './box-list.component';

describe('BoxListComponent', () => {
  let component: BoxListComponent;
  let fixture: ComponentFixture<BoxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
