var checks = false
const myPromise = new Promise(function(resolve,reject){
    if (checks == true)
    {
        resolve("I completed my promise")
    }
    else{
        reject("I am not able to complete the promise")
    }
})    
    myPromise.then(function(value){
        console.log(value)
    }).catch(function(error){
        console.log(error)
    })
