function sum(name,...args){
    console.log(arguments);
    let sum1 = 0;
    console.log(args)

    for(let i in args){
        sum+= args[i];
    }

}
sum("Akshat Tripathi",10,20,30,40)