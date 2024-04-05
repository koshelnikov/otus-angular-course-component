import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationShadowComponent } from './view-encapsulation-shadow.component';

describe('ViewEncapsulationShadowComponent', () => {
  let component: ViewEncapsulationShadowComponent;
  let fixture: ComponentFixture<ViewEncapsulationShadowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEncapsulationShadowComponent]
    });
    fixture = TestBed.createComponent(ViewEncapsulationShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
