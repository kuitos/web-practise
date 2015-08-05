/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-08-05
 */
let sets = new Set().add('hello').add('world').add('');
let map = new Map().set('name', 'kuitos').set('age', 10);
console.log(sets);
console.log(map);

let weakMap = new WeakMap().set({name:'weakMap'}, {value:'kuitos own'});
let weakSet = new WeakSet().add({name:'weakSet'});
console.log(weakMap);
console.log(weakSet);

