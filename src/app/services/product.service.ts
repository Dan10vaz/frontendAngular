import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = 'http://localhost:3000/api/v1/';

  private productCreatedSource = new BehaviorSubject<boolean>(false);
  productCreated$ = this.productCreatedSource.asObservable();


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}products/`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}products/create`, product);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}products/update`, product);
  }

  deleteProduct(id: any): Observable<any> {
    console.log(id);
    return this.http.delete<any>(`${this.apiUrl}products/deleted`, { body: { id } });
  }

  // Método para notificar cambios en las peticiones
  notifyProducts() {
    this.productCreatedSource.next(true);
  }
}
