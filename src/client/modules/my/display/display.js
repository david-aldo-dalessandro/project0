/* David D'Alessandro 
* 11/25/21
* JS file to handle the display rendering 
*/


import {LightningElement, track} from 'lwc'
import { menu } from 'my/cart'
import { promise } from 'my/promise'
import { locs, map } from 'my/locations'
import { coupons, banner } from 'my/coupons'

export default class Display extends LightningElement{

    //defining bools for conditiond of the pages
    home = true;
    cart = false;
    loc = false;
    abt = false;

    //declare all pages variables and assign initasl values for homepage
    pageName = 'Home';
    centerContentTitle ="Hello Customer";
    centerContentBlurb = "Welcome to the East Coast's sweetest treat! Please enjoy our monthly special and check our daily coupons!";
    menuItems = menu;

    cartTotal = 0;
    cartTotalDisp = false;
    couponReveal = false;

    @track
    cartItems = [];
    @track
    promisePics = [...promise];
    @track
    locPics = [...locs];
    @track
    mapPic = [...map];

    couponPics = [...coupons];
    bannerPics = [...banner];

    

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
        this.centerContentTitle ="Ice + Custard = Happiness";
        this.centerContentBlurb = "At Rita’s, “Ice Custard Happiness” is our way of life. We’re passionate about delivering super-friendly guest service and providing our guests with a cool, smooth, delightfully happy treat experience. If you’re looking to build memories, celebrate special moments, mark traditions, or simply need a pick-me-up, our fresh, tasty treats are guaranteed to do the trick. The best part? We take great pride in serving them to our community—and always with a side of happy.";
        this.secondCenterContentTitle = "Click on us for our promises to you!!";
    }

    couponFlip(){
        this.couponReveal = !this.couponReveal ;
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

    imageSwap(event){
        let a = event.target.getAttribute("id");
        
        let tempImage1 = this.promisePics[a].image;
        let tempImage2 = this.promisePics[a].image2;

        this.promisePics[a].image = tempImage2;
        this.promisePics[a].image2 = tempImage1;
    }

    imageMap(event){
        let a = event.target.getAttribute("id");
        let currentMap = 0;
        for(let i = 0; i < this.locPics.length; i++){
            if(this.locPics[i].index == a && this.locPics[i].flip === 'no' ){
                let tempImage1 = this.locPics[i].image;
                let tempImage2 = this.locPics[i].image2;
        
                this.locPics[i].image = tempImage2;
                this.locPics[i].image2 = tempImage1;

                this.locPics[i].flip = 'yes'
                currentMap = i+1;
            }
            else if(this.locPics[i].flip === 'yes'){
                let tempImage1 = this.locPics[i].image;
                let tempImage2 = this.locPics[i].image2;
        
                this.locPics[i].image = tempImage2;
                this.locPics[i].image2 = tempImage1;

                this.locPics[i].flip = 'no'
            }

            
            
            switch(currentMap){
                case 1:
                    this.mapPic[0].image = this.mapPic[0].image2;
                    break;
                case 2:
                    this.mapPic[0].image = this.mapPic[0].image3;
                     break;
                case 3:
                    this.mapPic[0].image = this.mapPic[0].image4;
                    break;
                default:
                    this.mapPic[0].image = this.mapPic[0].imageDef;
            }
            
        }

    }

}