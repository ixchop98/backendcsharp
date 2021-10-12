import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaSidebarComponent } from './ba-sidebar.component';

describe('BaSidebarComponent', () => {
  let component: BaSidebarComponent;
  let fixture: ComponentFixture<BaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
