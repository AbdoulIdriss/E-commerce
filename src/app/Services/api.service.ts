import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Products } from '../products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  
  items: Products[] = [];
  
  constructor( private http : HttpClient) { }
  
  private url :string = 'https://dummyjson.com/products';

  getData (): Observable<Products[]> {
    
    return this.http.get<Products[]>(this.url);

  } 

  getOneData(id:number):Observable<Products[]> {

    return this.http.get<Products[]>(this.url + '/' + id);
  }

  addToCart(product: Products) {
    this.items.push(product);
  }

}
