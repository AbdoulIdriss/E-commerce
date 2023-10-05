import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {
  constructor(private cartService: CartService){}

  currency = '$'

  items = this.cartService.getItems();

 
}
