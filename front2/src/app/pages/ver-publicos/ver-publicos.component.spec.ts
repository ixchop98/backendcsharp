import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPublicosComponent } from './ver-publicos.component';

describe('VerPublicosComponent', () => {
  let component: VerPublicosComponent;
  let fixture: ComponentFixture<VerPublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPublicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
