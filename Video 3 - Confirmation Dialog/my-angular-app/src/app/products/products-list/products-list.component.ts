import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../products.service';
import { Laptop } from '../products.models';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule, SweetAlert2Module],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productsService = inject(ProductsService);
  laptops?: Laptop[];
  columnsToDisplay = ['name', 'actions'];

  constructor(){
   this.loadProducts();
  }

  loadProducts(){
    this.productsService.getAll().subscribe(laptops => {
      this.laptops = laptops;
    });
  }

  delete(id: number){
    this.productsService.delete(id).subscribe(() => {

      Swal.fire("Success", "The operation was successful", 'success');

      this.loadProducts();
    });
  }

}
