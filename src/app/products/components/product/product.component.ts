import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 @Input() data:any={};
  @Output() item = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.item.emit({item:this.data,quantity:0})
  }
  addToHeart() {
    
  }
}
