var x = document.getElementById('currentNumber')
var cx = 0;
function increment(){
    if(cx<10){
    cx = cx +1;
    x.innerHTML= cx;
    }
    else{
        alert("Não pode ser maior que 10");
    }
}
function decrement(){
    if(cx>0){
    cx = cx -1;
    x.innerHTML= cx;
    }
    else{
        alert("Não pode ser menor que 0");
    }
}
document.getElementById("adicionar").addEventListener("click",increment);
document.getElementById("subtrair").addEventListener("click",decrement);



