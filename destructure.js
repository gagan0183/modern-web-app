const person = {
    first: 'first',
    lastname: 'lastname',
    profession: 'professions'
}

const {first, profession} = person;
console.log(first);
console.log(profession);

//destructure on arrays
const p = [1,2,3,9];
const [left, second,, nine] = p;
console.log(nine);