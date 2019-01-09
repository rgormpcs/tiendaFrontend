import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShopingComponent } from './my-shoping.component';

describe('MyShopingComponent', () => {
  let component: MyShopingComponent;
  let fixture: ComponentFixture<MyShopingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShopingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
