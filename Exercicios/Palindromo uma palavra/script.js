var palavra = "rever";
var palavraInvertida=[];
for (i=0; i < palavra.split("").length;i++){
     palavraInvertida.push(palavra.split("")[palavra.split("").length-1-i]);
}
if(palavraInvertida.join("")===palavra){
    console.log("Esta palavra é um palindromo");
}
else{
    console.log("Esta palavra nao e um palindromo");
}