let p = new Promise((resolve, reject) => {
    let sum = 1 * 5
    if(sum == 4){
        resolve('true')
    }else{
        reject('not equal')
    }
} )

p.then((message) => {
    console.log(`this is ${message}`)
}).catch((message) => {
    console.log(`this is ${message}`)
})