import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Products } from '../products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class APIService {
  
  constructor( private http : HttpClient) { }
  
  private url :string = 'https://dummyjson.com/products';

  getData (): Observable<Products[]> {
    
    return this.http.get<Products[]>(this.url);

  } 

}
