import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceSampleComponent } from './invoice-sample.component';

describe('InvoiceSampleComponent', () => {
  let component: InvoiceSampleComponent;
  let fixture: ComponentFixture<InvoiceSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
