import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaChechboxComponent } from './ba-chechbox.component';

describe('BaChechboxComponent', () => {
  let component: BaChechboxComponent;
  let fixture: ComponentFixture<BaChechboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaChechboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaChechboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
