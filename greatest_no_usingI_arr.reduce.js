let arr = [3,6,4,8,5,7,1,0]
let greatest_no = arr.reduce((res,curr) => {
    return ((res>curr) ? res : curr)
})
console.log(greatest_no)