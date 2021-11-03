import { CartItems } from './../Models/cartItems';
import { Product } from 'src/app/Models/product';
import { Injectable } from '@angular/core';
import { CartItem } from '../Models/cartItem';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() { }

    addToCart(product: Product) {
        let item = CartItems.find(p => p.product.productId === product.productId);
        if (item) {
            item.quantity++;
        } else {
            let cartItem = new CartItem();
            cartItem.product = product;
            CartItems.push(cartItem);
        }
    }
    cartList(): CartItem[] {
        return CartItems;
    }

}
