/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-08-05
 */
let [a,b] = [1, 2];
let {name:c, age:d} = {name: 'kuitos', age: 10};

function log({name:x}) {
  console.log(x);
}

log({name: 10});

console.log(a, b, c, d);