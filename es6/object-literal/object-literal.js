/**
 * @author Kuitos
 * @homepage https://github.com/kuitos
 * @since 2015-08-04. 21:51
 */

import Person from '../class/class.js';

let handle = 'handle';
let obj = {

  __proto__: new Person(),

  handle,

  find(){

    console.log('find');

  }

};

console.log([] instanceof Person);
export default obj;
