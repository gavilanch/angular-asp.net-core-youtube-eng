import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsCreateComponent } from './products/products-create/products-create.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'products', component: ProductsListComponent},
    {path: 'products/create', component: ProductsCreateComponent},
    {path: 'products/edit/:id', component: ProductsEditComponent}
];
