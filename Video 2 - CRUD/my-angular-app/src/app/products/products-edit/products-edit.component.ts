import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Laptop, LaptopCreation } from '../products.models';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { ProductsFormComponent } from "../products-form/products-form.component";

@Component({
  selector: 'app-products-edit',
  standalone: true,
  imports: [ProductsFormComponent],
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css'
})
export class ProductsEditComponent implements OnInit {
 
  @Input({transform: numberAttribute})
  id!: number;

  laptop?: Laptop;

  productsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit(): void {
    this.productsService.getById(this.id).subscribe(laptop => {
      this.laptop = laptop;
    });
  }

  saveChanges(laptop: LaptopCreation){
    this.productsService.update(this.id, laptop).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }

}
