import { inject } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { ProductsService } from "../../products/products.service";
import { catchError, map, Observable, of } from "rxjs";
import { ActivatedRoute } from "@angular/router";

export function laptopNameIsUnique(): AsyncValidatorFn {
    const laptopService = inject(ProductsService);
    const activatedRoute = inject(ActivatedRoute);

    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        if (control.pristine || !control.value){
            return of(null);
        }

        const id = activatedRoute.snapshot.paramMap.get('id') ?? "0";

        return laptopService.existsByName(control.value, id).pipe(
            map((exists) => (exists ? {message: "There's already a laptop with that name"} : null)),
            catchError(() => of(null))
        )
    }
}