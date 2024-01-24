import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveiDetailComponent } from './movei-detail.component';

describe('MoveiDetailComponent', () => {
  let component: MoveiDetailComponent;
  let fixture: ComponentFixture<MoveiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
