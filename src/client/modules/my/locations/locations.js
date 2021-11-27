/* David D'Alessandro
* 11/27/21
* Separate JS file for the Location module. Handles text placement, as well as the image swapping function for onclick events
*/

import { LightningElement, track} from 'lwc'
import {locs, map} from './locationSpots'

export default class Locations extends LightningElement{
    @track
    locPics = [...locs];
    @track
    mapPic = [...map];

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