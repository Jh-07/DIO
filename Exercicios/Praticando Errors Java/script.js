function verificaArray(array,int){
    try {
        if (!array && !int){ throw new ReferenceError("Declara os Parâmetros ai zé bunda")};
        if (typeof array !=='object'){ throw new TypeError("Tem que ser um objeto seu burro")};
        if (typeof int !=='number'){throw new TypeError ("Tem que ser um numero seu Otario")};
        if (array.length !== int){throw new RangeError("TEM QUE TER O MESMO TAMANHO DO NUMERO SEU IDIOTA")};
        return array
    } catch (e) {
        if (e instanceof ReferenceError){ console.log("Erro tipo 1"); console.log(e.message)}
        if (e instanceof TypeError){ console.log("Erro tipo 2"); console.log(e.message)}
        if (e instanceof RangeError){ console.log("Erro tipo 3"); console.log(e.message)}       
    }
}
console.log(verificaArray([1,2,3,4,5],5))