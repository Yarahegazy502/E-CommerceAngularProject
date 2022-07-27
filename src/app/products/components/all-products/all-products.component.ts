import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any=[];
  categories:any=[];
  loading:boolean=false;
  cartProducts: any = [];
  constructor(private productService: ProductsService) {}
  
  getProducts(){
  this.loading=true;
    this.productService.getAllProducts().subscribe(
      res => {
          this.loading=false
          this.products=res;
        }
      )
  }

  getCaategories(){
  this.loading=true;
    this.productService.getAllCategories().subscribe(
      res => {
          this.loading=false;
          this.categories=res;
          console.log(res)
        }
      )
  }

  filterProducts(e:any){
    let value = e.target.value;
    console.log(value)
    if(value=='all'){
      this.getProducts()
    }else{
      this.getProduct(value)
    }
  }

  getProduct(key:string){
    this.productService.getFilteredProduct(key).subscribe(
      res=>{
        this.products=res
        console.log(res)
      }
    )
  }
    ngOnInit():void{
      this.getProducts();
      this. getCaategories();
    }

  addToCart(e:any){
    // localStorage.setItem("cart", e)
    if ("cart" in localStorage) {
      this.cartProducts =JSON.parse(localStorage.getItem("cart")!);
      let existItem = this.cartProducts.find((item:any) => item.item.id == e.item.id)
      if (existItem) {
        alert("this product add before")
      }else{
        this.cartProducts.push(e);
        localStorage.setItem('cart',JSON.stringify(this.cartProducts))
      }
    }else{ 
      this.cartProducts.push(e);
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    }
    console.log(e)
  }

  }
