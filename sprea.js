const a = [1, 2, 3];
const b = [...a, 9];
console.log(b);

//strings
const value = 'value';
console.log([...value]);

//copy an objects
const object = {
    first: 'first',
    next: 'next'
}

console.log({...object});