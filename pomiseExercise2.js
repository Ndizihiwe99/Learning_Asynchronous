const recordVideoOne = new Promise((resolve, rejecct) => {
    resolve('video one recorded')
})
const recordVideoTwo = new Promise((resolve, rejecct) => {
    resolve('video two recorded')
})
const recordVideoThree = new Promise((resolve, rejecct) => {
    resolve('video theree recorded')
})

/*Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})*/

/*Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})*/

Promise.allSettled([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})

