module.exports = function reverse (n) {
  if (n > 0) {
    return String(n).split('').reverse().join('');
  } else {
    let arr = String(n).split('').reverse();
    arr.pop()
    return arr.join('')
  }
}
