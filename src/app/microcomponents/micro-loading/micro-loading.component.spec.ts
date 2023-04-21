import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroLoadingComponent } from './micro-loading.component';

describe('MicroLoadingComponent', () => {
  let component: MicroLoadingComponent;
  let fixture: ComponentFixture<MicroLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
