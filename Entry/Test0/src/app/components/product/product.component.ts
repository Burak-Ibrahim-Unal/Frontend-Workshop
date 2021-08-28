import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 =
  {
    productId: 1,
    productName: 'Product 1',
    categoryId: 3,
    unitPrice: 45,
  };
  product2 ={
    productId: 2,
    productName: 'Product 2',
    categoryId: 1,
    unitPrice: 35,
  };
  product3 ={
    productId: 3,
    productName: 'Product 3',
    categoryId: 2,
    unitPrice: 25,
  };
  product4 ={
    productId: 4,
    productName: 'Product 4',
    categoryId: 3,
    unitPrice: 50,
  };
  product5 ={
    productId: 5,
    productName: 'Product 5',
    categoryId: 2,
    unitPrice: 55,
  };
  products=[this.product1,this.product2,this.product3,this.product4,this.product5];

  constructor() { }

  ngOnInit(): void {
  }

}
