function largest(str){
    arr=str.split(" ");
    console.log(arr);
    max1=0;
    for(var i=0;i<arr.length;i++)
    {
        max2=arr[i].length;
        if(max1<max2){
            max1=max2;
            var max=i;
        }
    }
    console.log(arr[max]);
}
largest("r isaaaaaaaaaaaaa a boyaa");