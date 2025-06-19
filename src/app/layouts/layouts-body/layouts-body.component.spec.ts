import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsBodyComponent } from './layouts-body.component';

describe('LayoutsBodyComponent', () => {
  let component: LayoutsBodyComponent;
  let fixture: ComponentFixture<LayoutsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutsBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
