const promise = new Promise(() => {
    resolve(10);
});

// promise.then((value) => value * 2);
promise.then((value) => {
    console.log(value)
});

// const obs = new Observable((observer) => {
//     observer.next(10);
// });

// // obs.pipe(map(value) => value * 2);
// const sub = obs.subscribe((value) => {
//     console.log(value)
// });

// console.log(promise.then((value) => value * 2));