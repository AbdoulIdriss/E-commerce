import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  constructor ( 
    private router:Router, 
    private vcr : ViewContainerRef,
    private cfr : ComponentFactoryResolver
    ) {}

  async  loadProduct() {
    
    this.vcr.clear();
    const {ProductsComponent} = await import('../products/products.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(ProductsComponent)
    )
  }
}
