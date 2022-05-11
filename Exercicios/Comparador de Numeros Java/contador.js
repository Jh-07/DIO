const num1=20;
const num2=20;
var soma = num1 + num2;
function chec1(){
    if(num1==num2){
        return "";
    }
    else { return "não"; }
}
function chec2(){
    if(soma>10){
        return "maior";
    }
    else {return "menor";}
}
function chec3(){
    if(soma>20){
        return "maior";
    }
    else {return "menor";}
}
console.log( 'Os números ' + num1+' e ' + num2+' '+ chec1()+' são iguais. Sua soma é '+ (num1 + num2)+' que é '+ chec2()+' que 10 e '+ chec3()+' que 20')