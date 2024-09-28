import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCreateComponent } from './products-create.component';

describe('ProductsCreateComponent', () => {
  let component: ProductsCreateComponent;
  let fixture: ComponentFixture<ProductsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
