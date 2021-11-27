/* David D'Alessandro 
* 11/25/21
* JS file to handle the display rendering 
*/


import {LightningElement} from 'lwc'

export default class Display extends LightningElement{

    //defining bools for conditiond of the pages
    home = true;
    cart = false;
    loc = false;
    abt = false;

    //declare all pages variables and assign initasl values for homepage
    pageName = 'Home';  
 
    homeClick(){
        this.home = true;
        this.cart = false;
        this.loc = false;
        this.abt = false;

        this.pageName = "Home";
    }
   
    cartClick(){
        this.home = false;
        this.cart = true;
        this.loc = false;
        this.abt = false;

        this.pageName = 'Menu and Cart';
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
    }   
}