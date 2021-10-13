import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaMulticheckboxComponent } from './ba-multicheckbox.component';

describe('BaMulticheckboxComponent', () => {
  let component: BaMulticheckboxComponent;
  let fixture: ComponentFixture<BaMulticheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaMulticheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaMulticheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
