import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContextParentComponent } from './host-context-parent.component';

describe('HostContextParentComponent', () => {
  let component: HostContextParentComponent;
  let fixture: ComponentFixture<HostContextParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostContextParentComponent]
    });
    fixture = TestBed.createComponent(HostContextParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
