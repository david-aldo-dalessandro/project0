/* David D'Alessandro
* 11/27/21
* Separate JS file for the About module. Handles text placement, as well as the image swapping function for onclick events
*/

import { LightningElement, track } from 'lwc'
import {promise} from './promise'

export default class About extends LightningElement{

    @track
    promisePics = [...promise];

    centerContentTitle ="Ice + Custard = Happiness";
    centerContentBlurb = "At Rita’s, “Ice Custard Happiness” is our way of life. We’re passionate about delivering super-friendly guest service and providing our guests with a cool, smooth, delightfully happy treat experience. If you’re looking to build memories, celebrate special moments, mark traditions, or simply need a pick-me-up, our fresh, tasty treats are guaranteed to do the trick. The best part? We take great pride in serving them to our community—and always with a side of happy.";
    secondCenterContentTitle = "Click on us for our promises to you!!";

    imageSwap(event){
        let a = event.target.getAttribute("id");
        
        let tempImage1 = this.promisePics[a].image;
        let tempImage2 = this.promisePics[a].image2;

        this.promisePics[a].image = tempImage2;
        this.promisePics[a].image2 = tempImage1;
    }
}