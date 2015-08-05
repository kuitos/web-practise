/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2015-08-05
 */
function get(x, y = 12) {
  return x + y;
}

function getLength(...y) {

  return y.length;

}

console.log(get(3) === 15);
console.log(get(...[1, 4]));
console.log(getLength(12, 3, 4, 5));