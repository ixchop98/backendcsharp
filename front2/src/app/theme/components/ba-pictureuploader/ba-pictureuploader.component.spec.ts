import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaPictureuploaderComponent } from './ba-pictureuploader.component';

describe('BaPictureuploaderComponent', () => {
  let component: BaPictureuploaderComponent;
  let fixture: ComponentFixture<BaPictureuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaPictureuploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaPictureuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
