/* David D'Alessandro
* 11/27/21
* Separate JS file for the Home module. Handles text placement, the banner, and the coniditonal rendering of the coupons
*/

import { LightningElement } from 'lwc'
import {coupons, banner} from './coupons'

export default class Home extends LightningElement{

    couponReveal = false;
    couponPics = [...coupons];
    bannerPics = [...banner];

    centerContentTitle ="Hello Customer";
    centerContentBlurb = "Welcome to the East Coast's sweetest treat! Please enjoy our monthly special and check our daily coupons!";

    couponFlip(){
        this.couponReveal = !this.couponReveal ;
    }

}