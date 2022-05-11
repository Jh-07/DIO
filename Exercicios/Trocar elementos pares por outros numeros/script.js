var array1=[];
console.log(array1);
if(!array1.length){
    console.log(-1);
}
for(i=0;i<array1.length;i++){
    if(array1[i]%2 === 0 && array1[i]!== 0){
        array1[i]=0;
    }
}
console.log(array1)