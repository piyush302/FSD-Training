function capcheck(str,index){
    str1=str.toUpperCase();
    if(str[index]==str1[index]){
        console.log("uppercase");
    }
    else if(str[index]!=str1[index]){
        console.log("no upper case");
    }
    }
    capcheck("piYush lives in bng",2);