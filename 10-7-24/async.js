function asyncFunc() {
    return new Promise((resolve, reject) => (
        setTimeout(() => {
            console.log("data1")
            resolve("successfully fetched data 1")
        }, 4000)
    ))
}

function asyncFunc1() {
    return new Promise((resolve, reject) => (
        setTimeout(() => {
            console.log("data2")
            resolve("successfully fetched data 2")
        }, 4000)
    ))
}

console.log("fetching data 1")
let p1 = asyncFunc()
p1.then((res) => {
    console.log(res)
    console.log("fetching data 2")
    let p2 = asyncFunc1()
    p2.then((res) => {
        console.log(res)
    })

})

