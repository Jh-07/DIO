class contaBancaria{
    constructor(agencia,numero,_saldo,tipo){
    this.agencia=agencia;
    this.numero=numero;
    this.saldo=_saldo;
    this.tipo=tipo
    }
    get _saldo(){
        console.log(this.saldo)
    }

    set _saldo(valor){
        this.saldo= valor;
    }

    sacarSaldo(valor){
        if(valor>this.saldo) return 'Ta pobre'
        this.saldo = this.saldo- valor;
        return 'Seu novo saldo é: ' + this.saldo
    }
    depositarSaldo(valor2){
        this.saldo += valor2;
        return 'Seu novo saldo é: ' + this.saldo

    }
}
class contaCorrente extends contaBancaria{
   constructor(agencia2,numero2,saldo2,_cartaoCredito){
   super(agencia2,numero2,saldo2);
   this.tipo='Conta Corrente';
   this.cartaoCredito= _cartaoCredito;
   }
    get _cartaoCredito(){
        return this.cartaoCredito
    }
    set _cartaoCredito(valor3){
        this.cartaoCredito=valor3;
    }
}
class contaPoupança extends contaBancaria{
    constructor(agencia3,numero3,saldo3){
    super(agencia3,numero3,saldo3)
    this.tipo='Conta Poupança'
    }

}
class contaUniversitaria extends contaBancaria{
    constructor(agencia3,numero3,saldo3){
    super(agencia3,numero3,saldo3)
    this.tipo='Conta Universitária'   
    }
    sacarSaldo(valor){
        if(valor>this.saldo) throw 'Ta pobre';
        if(valor>500) throw 'Não pode sacar mais do que 500'
        this.saldo = this.saldo - valor;
        return 'Seu novo saldo é: ' + this.saldo
    }
}





