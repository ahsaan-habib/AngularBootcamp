import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssComponent } from './html-css.component';

describe('HtmlCssComponent', () => {
  let component: HtmlCssComponent;
  let fixture: ComponentFixture<HtmlCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
