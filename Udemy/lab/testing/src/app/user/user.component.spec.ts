import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { DataService } from '../shared/data.service';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('Component: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    let name = userService.user.name
    expect(name).toEqual(app.user.name);
  })

  it('should display the user name when is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  })

  it('shouldn\'t display the user name when is not logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')?.textContent).not.toContain(app.user.name)
  })

  // it('shouldn fetch data successfully if not called asynchronosly', waitForAsync (() => {
  //   let fixture = TestBed.createComponent(UserComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   let dataService = fixture.debugElement.injector.get(DataService);
  //   let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));

  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {

  //     expect(app.data).toBe('Data');
  //   });
  // }));

  it('shouldn fetch data successfully if not called asynchronosly', fakeAsync (() => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));

    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');
  }));
});
