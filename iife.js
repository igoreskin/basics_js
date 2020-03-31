// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }

// console.log(game())

(function game () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

(function game(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);