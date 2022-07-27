import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


const routes: Routes = [
  {path:"" , component:AllProductsComponent},
  {path:"products" , component:AllProductsComponent},
  {path:'details/:id',component:ProductsDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'**',redirectTo:'products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
