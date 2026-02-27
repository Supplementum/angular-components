import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSupplementumComponents } from './ngx-supplementum-components';

describe('NgxSupplementumComponents', () => {
  let component: NgxSupplementumComponents;
  let fixture: ComponentFixture<NgxSupplementumComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxSupplementumComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxSupplementumComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create - test 2', () => {
    expect(component).toBeTruthy();
  });
});
