function *calculator(input) {
    var doubleThat = 2 * (yield(input / 2));
    var another = yield(doubleThat);
    return (input * doubleThat * another);
}

let calc = calculator(9);
console.log(calc.next());
console.log(calc.next(90));
console.log(calc.next(99));