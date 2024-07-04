let user = ["Utkarsh","Gupta",99]
let [fname,lname,percentile] = user
function funct(fname,lname,percentile){
    let fullname = `${fname} ${lname}`
    return (fullname)
}
console.log(funct(fname,lname,percentile))
