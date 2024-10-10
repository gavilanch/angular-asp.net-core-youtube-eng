import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Laptop, LaptopCreation } from '../products.models';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInput, MatButtonModule, RouterLink],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent implements OnInit {
 
  private readonly formBuilder = inject(FormBuilder);

  @Input({required: true})
  title!: string

  @Input()
  model?: Laptop;

  @Output()
  formPosted = new EventEmitter<LaptopCreation>();

  ngOnInit(): void {
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  form = this.formBuilder.group({
    name: ['']
  })

  saveChanges(){
    const laptop = this.form.value as LaptopCreation;
    this.formPosted.emit(laptop);
  }
}
