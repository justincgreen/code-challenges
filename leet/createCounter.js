/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init
    return {
        increment: () => console.log(++count),
        decrement: () => console.log(--count),
        reset: () => console.log(count = init)
    }
};

const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4