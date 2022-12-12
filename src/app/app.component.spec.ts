import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { addition } from './calculator';

describe('AppComponent', () => {

    const component = new AppComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  it('should be AngularUnitTestApp in app component',()=>{
    expect(component.showMessage(component.title)).toBe("AngularUnitTestApp")
  })

  it('addition should be', ()=>{
    expect(addition(10,60)).toBeGreaterThan(20);
  })

  // x use for exclude any test from execution

  xit('shoule be wrong info for addition', ()=>{
    expect(addition(10,60)).toBeGreaterThan(100);
  })


});
