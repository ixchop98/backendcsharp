import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaMsgcenterComponent } from './ba-msgcenter.component';

describe('BaMsgcenterComponent', () => {
  let component: BaMsgcenterComponent;
  let fixture: ComponentFixture<BaMsgcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaMsgcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaMsgcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
