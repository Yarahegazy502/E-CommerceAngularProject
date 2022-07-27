import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProduct:any=JSON.parse(localStorage.getItem("cart")!)
  total:any=0
  allPrice: number = 0
  constructor(
    private cdn: ChangeDetectorRef
    ) {
    }
    ngOnInit(): void {
      // console.log(this.cartProduct);
      
    }

 
  totalPrice() {
    this.total = 0;
      this.cartProduct.forEach((i: any) => {
      // console.log(i.item.price);
      // console.log(i.quantity);
      this.total += i.item.price * i.quantity;
    });
      return this.total
    }

  addQuantity(i:any){
    (this.cartProduct[i].quantity >= 0)?this.cartProduct[i].quantity += 1:"";
  }

  reduceQuantity(i:any){
    (this.cartProduct[i].quantity > 0)?this.cartProduct[i].quantity -= 1:"";
  }

  removeItem(i:any){
    console.log(i);
    this.cartProduct.pop(i);
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    // return this.cartProduct
    
  }

}
