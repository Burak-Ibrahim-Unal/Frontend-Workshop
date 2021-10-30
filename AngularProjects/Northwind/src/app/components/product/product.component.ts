import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1: any = {
    productId: 1,
    productName: 'Elmalı Kek 1',
    categoryId: 1,
    unitPrice: 6,
  };
  product2: any = {
    productId: 2,
    productName: 'Elmalı Kek 2',
    categoryId: 2,
    unitPrice: 4,
  };
  product3: any = {
    productId: 3,
    productName: 'Elmalı Kek 3',
    categoryId: 3,
    unitPrice: 5,
  };
  product4: any = {
    productId: 4,
    productName: 'Elmalı Kek 4',
    categoryId: 2,
    unitPrice: 7,
  };
  product5: any = {
    productId: 5,
    productName: 'Elmalı Kek 5',
    categoryId: 1,
    unitPrice: 6,
  };
  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
