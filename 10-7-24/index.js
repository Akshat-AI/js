let promeise = new Promise((resolve,reject) => { 
    console.log("I am a promise")
    setTimeout(()=>reject("promise is rejected"),8000)
    setTimeout(()=>resolve("promise is accepted"),8000)

    
})