var vowelctr = (str) => {
    var vow_ctr = 0;
    var strlen = str.length;
    for (let i = 0;i<strlen;i++){
        if (["a", "e", "i", "o", "u"].includes(str[i])) {
            vow_ctr +=1;
        }


    }
    
    console.log(vow_ctr)
}

vowelctr("Hello World")