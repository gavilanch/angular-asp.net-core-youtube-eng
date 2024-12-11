import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../products.service';
import { LaptopCreation } from '../products.models';
import { ProductsFormComponent } from "../products-form/products-form.component";
import { parseErrorFromWebApi } from '../../shared/functions/parseErrors';
import { DisplayErrorsComponent } from "../../shared/components/display-errors/display-errors.component";

@Component({
  selector: 'app-products-create',
  standalone: true,
  imports: [ProductsFormComponent, DisplayErrorsComponent],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent {
  productsService = inject(ProductsService);
  router = inject(Router);
  errors: string[] = [];

  saveChanges(laptop: LaptopCreation){
    this.productsService.create(laptop).subscribe({
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
