import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuItemComponent } from './menu-item.component';
import { Router } from '@angular/router';


describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should navigate to the specified route when toPush is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.toPush('my-route');
    expect(navigateSpy).toHaveBeenCalledWith(['my-route']);
  });
});
