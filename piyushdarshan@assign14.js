function startstr(str1,str2){
    for(i=0;i<str2.length;i++){
        if(str1[i]!=str2[i]){
            break;
        
    }
    }
        if(i==str2.length){
            console.log("yes");
        }
        else{
            console.log("no");
        }
}
startstr("ram is a boy","ram is");