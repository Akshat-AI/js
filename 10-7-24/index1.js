const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        reject("Failure");
    })

}

let prmise = getPromise()

prmise.catch((err) => {
    console.log("promise unfulfilled",err)
})

