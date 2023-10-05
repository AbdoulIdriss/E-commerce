import { Component, OnInit } from '@angular/core';
import { APIService } from '../Services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../products';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data: any = [];
  currency = '$'
  value: any = [];
  infos:any

  constructor(private apiService: APIService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private cartService: CartService
    ) { }

  ngOnInit(): void {

    this.getProd()
    // this.getProdDetails()
  }

  getProd(): void {

    this.apiService.getData().subscribe((response: any) => {

      console.log(response);

      this.data = response.products

      console.log(this.data);
    })

  }

  addToCart(product: Products){
    this.cartService.addToCart(product)
    window.alert('Omedeto Go Zaimas')
  }

}

