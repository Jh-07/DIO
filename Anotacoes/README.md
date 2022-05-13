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
//Dessa forma os parametrosFilha 1,2 e 3 serão herdados respectivamente dos parametrosPai 1,2 e 3
const filha1 = new filha (10,20,30,40)
////Este objeto tera os valores finais como : p1:10 , p2:20 ,p3: 30, f4:40
~~~
O super determina,também, que parametro da classe filha corresponde ao parametro da classe pai.
No caso acima parametroFilha1(_f1_) corresponde ao parametroPai1(_p1_)

ex:
~~~javascript
class pai{
constructor(parametroPai1,parametroPai2,parametroPai3){
}

class filha extends pai{
constructor(parametroFilha3,parametroFilha2,parametroFilha1,parametroFilha4){
super(parametroFilha1,parametroFilha2,parametroFilha3)
}
//Nesse caso f3 ,que é o primeiro valor do construtor da classe filha, assumirá o terceiro valor do construtor da classe pai

const filha2 = new filha (10,20,30,40)
//Este objeto tera os valores finais como : p1:30 , p2:20 ,p3: 10, f4:40
~~~
