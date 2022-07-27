import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id:any
  data:any={}
  constructor(private route:ActivatedRoute , private productService:ProductsService) { 
    this.id=this.route.snapshot.paramMap.get("id");
  }
  
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.productService.getSingleProduct(this.id).subscribe(res=>{
      this.data=res;
      console.log(res)
    })
  }
}
