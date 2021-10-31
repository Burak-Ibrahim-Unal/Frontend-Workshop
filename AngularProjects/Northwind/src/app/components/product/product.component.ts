import { ProductResponseModel } from './../../Models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiURL = 'https://localhost:44324/api/products/getall';
  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: '',
  //   success: true,
  // };
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log('init works');
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiURL)
      .subscribe((response) => {
        //this.productResponseModel = response;
        this.products = response.data;
      });
  }
}
