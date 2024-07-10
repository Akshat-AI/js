const checkNumber=new Promise((resolve,reject)=>{
    let num=11;
    if(num%2===0){
        resolve("Even Number");
    } else {
        reject("Odd Number");
    }
})

checkNumber.then(result=>{
     console.log(result);
}).catch(error=>{
    console.log(error);
})

const myresult=async()=>{
    try{
    let result=await checkNumber;
    console.log(result);
    }catch(error){
       console.log(error);
    }
}
myresult();