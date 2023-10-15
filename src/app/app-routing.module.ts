import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { BodyComponent } from './body/body.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  { path:'', redirectTo:'app', pathMatch:'full'},
  { path: 'header', component: HeaderComponent },
  { path:'body', component: BodyComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'products', component: ProductsComponent, title: 'Products'},
  { path: 'prod-details', component: ProdDetailsComponent},
  { path: 'prod-details/:id', component: ProdDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
