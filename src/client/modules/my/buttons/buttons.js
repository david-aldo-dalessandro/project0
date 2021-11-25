/* David D'Alessandro
* 11/25/21
* JS for custom buttons from lecture
*/

import { LightningElement, api } from 'lwc'

export default class Buttons extends LightningElement{
    
    @api 
    variant;

    @api
    label;
}