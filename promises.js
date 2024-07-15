var checks = false
const myPromise = new Promise((resolve,reject) =>{
    if (checks == true)
    {
        resolve("I completed my promise")
    }
    else{
        reject("I am not able to complete the promise")
    }
})    

    myPromise.then((value) => {
        console.log(value)
    }).catch((error) => {
        console.log(error)
    })