import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Laptop, LaptopCreation } from '../products.models';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { ProductsFormComponent } from "../products-form/products-form.component";
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { parseErrorFromWebApi } from '../../shared/functions/parseErrors';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";

@Component({
  selector: 'app-products-edit',
  standalone: true,
  imports: [ProductsFormComponent, LoadingComponent, DisplayErrorsComponent],
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css'
})
export class ProductsEditComponent implements OnInit {
 
  @Input({transform: numberAttribute})
  id!: number;

  laptop?: Laptop;

  productsService = inject(ProductsService);
  router = inject(Router);
  errors: string[] = [];

  ngOnInit(): void {
    this.productsService.getById(this.id).subscribe(laptop => {
      this.laptop = laptop;
    });
  }

  saveChanges(laptop: LaptopCreation){
    this.productsService.update(this.id, laptop).subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: err => {
        const errors = parseErrorFromWebApi(err);
        this.errors = errors;
      }
    });
  }

}
