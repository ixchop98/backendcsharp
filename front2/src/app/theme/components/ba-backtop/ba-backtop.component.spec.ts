import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaBacktopComponent } from './ba-backtop.component';

describe('BaBacktopComponent', () => {
  let component: BaBacktopComponent;
  let fixture: ComponentFixture<BaBacktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaBacktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaBacktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
