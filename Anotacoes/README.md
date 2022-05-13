# Anotações importantes
## Java
###  Sobre sets
Sets são um tipo de **_Coleção_** em Java parecido com um _Array_ mas tem certas propriedades diferentes.

#### Valores únicos
exemplos:

~~~javascript
const array_comum=[10,20,30,20,40,40,50];
const demonstraçãoSet = new Set(array_comum);
console.log(demonstraçãoSet)
//demonstraçãoSet será igual a [10,20,30,40,50]
~~~
## Erros customizáveis
Existem vários tipos de errors, mas não há diferenças significativas, são mais para melhorar a leitura do código 

## Classes
### Usando o super()
**super** é usado para utilizar um método ou parametro da classe(objeto) pai, e deve ser utilizado **usando os mesmos nomes utilizados da classe filha**
ex:

~~~javascript
class pai{
constructor(parametroPai1,parametroPai2,parametroPai3){
}

class filha extends pai{
constructor(parametroFilha1,parametroFilha2,parametroFilha3,parametroFilha4){
super(parametroFilha1,parametroFilha2,parametroFilha3)
}
~~~
Dessa forma os parametrosFilha 1,2 e 3 serão herdados respectivamente dos parametrosPai 1,2 e 3
