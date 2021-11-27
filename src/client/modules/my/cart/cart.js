/* David D'Alessandro
* 11/27/21
* Separate JS file for the Cart module. Handles the click events and has functions used to add/remove items and change cart quantity
*/

import { LightningElement, track } from 'lwc'
import { menu } from './cartContents'

export default class Cart extends LightningElement{
menuItems = menu;

cartTotal = 0;
cartTotalDisp = false;

@track
cartItems = [];

addItem(event){
    let a = event.target.getAttribute("class");
    let count = 0;
    let i = 0;

    if(this.cartItems.length === 0){
        this.cartItems.push(menu[a]);
        this.cartItems[0].cartIndex = 0;
        this.cartTotal = this.cartItems[0].price;
        this.cartTotalDisp = true;
    }
    else{
        for(i = 0; i < this.cartItems.length; i++){
            if(this.cartItems[i].name === menu[a].name){
                console.log('comparing ' + this.cartItems[i].name + ' at index ' + i + " with " + menu[a].name);
                count = 1;
            }
        }
        if(count === 0){
            this.cartItems.push(menu[a]);
            this.cartItems[i].cartIndex = this.cartItems.length - 1;
            this.cartTotal = Math.round((this.cartTotal + this.cartItems[i].price)*100)/100;
            
        }
        count = 0
    }

    
    
}

removeItem(event){
    let a = event.target.getAttribute("class");
    let itemPrice = this.cartItems[a].price;
    let itemQuant = this.cartItems[a].quantity;
    this.cartItems[a].quantity = 1;
    this.cartItems.splice(a,1);
    
    for(let i = 0; i < this.cartItems.length; i++){
        this.cartItems[i].cartIndex=i;
        
    }

   this.cartTotal = Math.round((this.cartTotal - itemPrice * itemQuant)*100)/100;

    if(this.cartItems.length === 0){
        this.cartTotalDisp = false;
    }

}

updateQuantity(event){
    let a = event.target.getAttribute("class");
    this.cartItems[a].quantity++;
    this.cartTotal =  Math.round((this.cartTotal + this.cartItems[a].price)*100)/100;
}

decreaseQuantity(event){
    let a = event.target.getAttribute("class");

    if(this.cartItems[a].quantity > 1){
        this.cartItems[a].quantity--;
        this.cartTotal = Math.round((this.cartTotal - this.cartItems[a].price)*100)/100;
    }
}

}