/* David D'Alessandro
* 11/24/21
* Index JavaScript file for project rendering
*/

/* eslint-disable @lwc/lwc/no-document-query */

import { createElement } from 'lwc';
import MyDisplay from 'my/display';

const display = createElement('my-display', { is: MyDisplay });
document.querySelector('#display').appendChild(display);



