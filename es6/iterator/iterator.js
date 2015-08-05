/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-08-05
 */

function iterator(array) {

  var index = 0;

  return {

    next(){
      return index < array.length ? {value: array[index++], done: false} : {value: undefined, done: true}
    }
  };
}

let it = iterator([1, 2, 3]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let data = {

  data: [1, 2, 3],

  [Symbol.iterator](){

    let index = 0;
    const self = this;
    const length = this.data.length;

    return {

      next(){
        return index < length ? {value: {index: index, value: self.data[index++]}, done: false}
          : {value: undefined, done: true}
      }
    };
  }
};

for (let i of data) {
  console.log(i, data[i]);
}
