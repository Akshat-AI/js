function vow_cnt(str){
    let count = 0;
    for (const char of str){
        if (char === 'a'|| char === "e" || char === "i" || char === "o"|| char=== "u")
        {
            count+=1
        }   
        
    }
    console.log(count)
}

vow_cnt("Hello World")