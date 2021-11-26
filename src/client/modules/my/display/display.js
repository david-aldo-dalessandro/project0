/* David D'Alessandro 
* 11/25/21
* JS file to handle the display rendering 
*/


import {LightningElement, track} from 'lwc'
import { menu } from 'my/cart'

export default class Display extends LightningElement{

    //defining bools for conditiond of the pages
    home = true;
    cart = false;
    loc = false;
    abt = false;

    //declare all pages variables and assign initasl values for homepage
    pageName = 'Home';
    centerContentTitle ="Hello Customer";
    centerContentBlurb = "Short blurb about Rita's Water Ice";
    menuItems = menu;

    cartTotal = 0;
    cartTotalDisp = false;

    @track
    cartItems = [];

    homeClick(){
        this.home = true;
        this.cart = false;
        this.loc = false;
        this.abt = false;

        this.pageName = "Home";
        this.centerContentTitle ="Hello Customer";
        this.centerContentBlurb = "Short blurb about Rita's Water Ice";
    }
   
    cartClick(){
        this.home = false;
        this.cart = true;
        this.loc = false;
        this.abt = false;

        this.pageName = 'Menu and Cart';

        console.log();

        
    }

    locClick(){
        this.home = false;
        this.cart = false;
        this.loc = true;
        this.abt = false;

        this.pageName = 'Locations';
    }

    abtClick(){
        this.home = false;
        this.cart = false;
        this.loc = false;
        this.abt = true;

        this.pageName = 'About Us';
        this.centerContentTitle ="Rita's History";
        this.centerContentBlurb = "History of Rita's";
    }

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
                this.cartTotal += this.cartItems[i].price;
                
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

        this.cartTotal -= itemPrice * itemQuant;

        if(this.cartItems.length === 0){
            this.cartTotalDisp = false;
        }

    }

    updateQuantity(event){
        let a = event.target.getAttribute("class");
        this.cartItems[a].quantity++;
        this.cartTotal += this.cartItems[a].price;
    }

    decreaseQuantity(event){
        let a = event.target.getAttribute("class");
    
        if(this.cartItems[a].quantity > 1){
            this.cartItems[a].quantity--;
            this.cartTotal -= this.cartItems[a].price;
        }
    }

}