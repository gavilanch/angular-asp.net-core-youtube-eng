import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Laptop, LaptopCreation } from './products.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private http = inject(HttpClient);
  private apiUrl = environment.apiURL + '/api/laptops';

  public getAll(): Observable<Laptop[]>{
    return this.http.get<Laptop[]>(`${this.apiUrl}`);
  }

  public getById(id: number): Observable<Laptop>{
    return this.http.get<Laptop>(`${this.apiUrl}/${id}`);
  }

  public create(laptop: LaptopCreation){
    return this.http.post(`${this.apiUrl}`, laptop);
  }

  public update(id: number, laptop: LaptopCreation){
    return this.http.put(`${this.apiUrl}/${id}`, laptop);
  }

  public delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
