import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/category.model';
import { IProduct } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private Base_URL='https://api.escuelajs.co/api/v1'
  private My_Api_Url= 'http://localhost:5142/api'
  constructor(private Client:HttpClient) { }

  getCategories(): Observable<ICategory[]>{
    return this.Client.get<ICategory[]>(`${this.My_Api_Url}/Category`)
  }
  getProducts(): Observable<IProduct[]>{
    return this.Client.get<IProduct[]>(`${this.My_Api_Url}/Product`)
  }
  getProductById(id:number): Observable<IProduct>{
    return this.Client.get<IProduct>(`${this.My_Api_Url}/Product/${id}`)
}
}
