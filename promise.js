//this function is reolved after 1 sec
const wait = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
});

wait().then(() => {
    console.log('this');
    return wait();
}).then(() => {
    console.log('p');
});