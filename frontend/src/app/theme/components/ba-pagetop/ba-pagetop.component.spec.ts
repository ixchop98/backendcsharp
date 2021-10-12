import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaPagetopComponent } from './ba-pagetop.component';

describe('BaPagetopComponent', () => {
  let component: BaPagetopComponent;
  let fixture: ComponentFixture<BaPagetopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaPagetopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaPagetopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
