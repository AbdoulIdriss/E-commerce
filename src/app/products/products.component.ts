import { Component, OnInit } from '@angular/core';
import { APIService } from '../Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  data:any = []; 
  currency = '$'

  constructor(private apiService : APIService){}

  ngOnInit(): void {

    this.getProd()
  }
 getProd():void {
  this.apiService.getData().subscribe((response:any) => {

    console.log(response);
    
    this.data = response.products
    
    console.log(this.data);

  })
}
}

