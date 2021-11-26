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
        console.log(menu[a].index);

        if(this.cartItems.length == 0){
            this.cartItems.push(menu[a]);
            this.cartItems[0].index = 0;
        }
        else{
            for(i = 0; i < this.cartItems.length; i++){
                if(this.cartItems[i].name == menu[a].name){
                    //this.cartItems.push(menu[a]);
                    console.log('comparing ' + this.cartItems[i].name + ' at index ' + i + " with " + menu[a].name);
                    count = 1;
                }
            }
            if(count == 0){
                this.cartItems.push(menu[a]);
                console.log(this.cartItems[i].index);
                this.cartItems[i].index = this.cartItems.length - 1;
                console.log(this.cartItems[i].index);
            }
            count = 0
        }

        
        
    }

    removeItem(event){
        let a = event.target.getAttribute("class");
        this.cartItems.splice(a,1);
        
        for(let i = 0; i < this.cartItems.length; i++){
            this.cartItems[i].index=i;
        }

    }

}