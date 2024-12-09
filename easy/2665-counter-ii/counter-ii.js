/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let counter = init;

  const functionObject = {
    increment: function () {
      return ++counter;
    },
    decrement: function () {
      return --counter;
    },
    reset: function () {
      return (counter = init);
    },
  };

  return functionObject;
};

const counter = createCounter(5);
//counter.increment(); // 6
//counter.reset(); // 5
//counter.decrement(); // 4

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
