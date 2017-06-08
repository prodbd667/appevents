import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapComponent } from './wrap.component';

describe('WrapComponent', () => {
  let component: WrapComponent;
  let fixture: ComponentFixture<WrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
