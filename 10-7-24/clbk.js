const cal=(n1,n2,op,result)=>{
   switch(op){
     case "+": result(n1,n2);break;
     case "-": result(n1,n2);break;
   }
}
const sum=(n1, n2)=>{
    console.log("Sum="+(n1+n2));
}
const sub=(n1, n2)=>{
    console.log("Sub="+(n1-n2));
}
cal(83,45,"+",sum);
cal(83,45,"-",sub);