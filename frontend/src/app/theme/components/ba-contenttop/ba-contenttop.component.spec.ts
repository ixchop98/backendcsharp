import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaContenttopComponent } from './ba-contenttop.component';

describe('BaContenttopComponent', () => {
  let component: BaContenttopComponent;
  let fixture: ComponentFixture<BaContenttopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaContenttopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaContenttopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
