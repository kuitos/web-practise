/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-08-05
 */

let data = {

  data: [1, 2, 3],

  index: 0,

  [Symbol.iterator]: function* () {
    yield index++;
  }

};

function* helloWorld() {

  yield 'hello';
  yield 'world';

}

var iterator = helloWorld();
console.log(iterator.next());
console.log(iterator.next());
