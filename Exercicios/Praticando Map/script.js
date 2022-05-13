const arr = [2,9,15,18,16]
const obj ={
    nome: 'hit',
    valor: 5,
 }
function mapthis(array,thisarg){
    return array.map(function (elemento) {return elemento * this.valor}, thisarg)
}
//function filterthis(array,thisarg){
//    return array.map(function (elemento) {return elemento * this.valor}, thisarg).filter(function(item){ return item % 2===0 })
//}
function filterthis(funcao){
    return funcao.filter((item)=> {return item %2===0})
}
function reducethis(funcao){
    const callback= function(acc,valorAtual){return acc + valorAtual};
    return funcao.reduce(callback);
}
function reducethis2(funcao,inicial){
    const callback= function(acc,valorAtual){return acc + valorAtual};
    return funcao.reduce(callback,inicial);
}
console.log(arr);
console.log(mapthis(arr,obj));
console.log(filterthis(mapthis(arr,obj)));
console.log(reducethis(filterthis(mapthis(arr,obj))));
console.log(reducethis2(filterthis(mapthis(arr,obj)),100));

