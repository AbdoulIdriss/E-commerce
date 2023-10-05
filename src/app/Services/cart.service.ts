import { Injectable } from '@angular/core';
import { Products } from '../products';
import { LocalServiceService } from './local-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private localService : LocalServiceService) { }
  
  items: Products[] = [];

  addToCart(product: Products) {

   let cardProd = this.localService.select('Product');

   if (!cardProd) {

    cardProd = []

   }

   cardProd.push(product)

    this.localService.insert('Product', cardProd)

    this.items.push(cardProd);
    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.localService.clear
    return this.items;
  }
}
