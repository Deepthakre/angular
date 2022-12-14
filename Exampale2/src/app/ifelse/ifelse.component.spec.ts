import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFELSEComponent } from './ifelse.component';

describe('IFELSEComponent', () => {
  let component: IFELSEComponent;
  let fixture: ComponentFixture<IFELSEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IFELSEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFELSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
