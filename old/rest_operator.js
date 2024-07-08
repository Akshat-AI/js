function sum(name,...args){
    let sum = 0;
    for(let i in args){
        sum+=args[i];
    }
    console.log(sum);
    console.log(name);
}

sum("Akshat",10,20,2323,34)