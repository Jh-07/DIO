# Anotações importantes
## Java
### This
**this** é um método de se referenciar a um objeto e acessar suas chaves e valores

### Sets
Sets são um tipo de **_Coleção_** em Java parecido com um _Array_ mas tem certas propriedades diferentes.

#### Valores únicos
exemplos:

~~~javascript
const array_comum=[10,20,30,20,40,40,50];
const demonstraçãoSet = new Set(array_comum);
console.log(demonstraçãoSet)
//demonstraçãoSet será igual a [10,20,30,40,50]
~~~
###  Map, Filter e Reduce
#### Mapeamento
Mapeamento pode ser feito de duas formas: através da sintaxe **_.map_** ou da sintaxe **_.forEach_**

Não substitui o _array_ original e realiza as operações em ordem

#### .map
* Não substitui o _array_ original
* Cria um novo _array_
~~~javascript
const array1 = [1,3,5,8,11]
console.log(array1.map((elemento) => elemento * 2));
//Aparecerá o vetor [2,6,10,16,22]
~~~

#### .forEach
* Não substitui o _array_ original
* **Não** cria um novo _array_
~~~javascript
console.log(array1.forEach((elemento)=> elemento *2));
//isso retornará Undefined

/*porém se atribuírmos a outra constante, 
teremos um retorno*/
const array2= array1.forEach((elemento)=> elemento *2)
console.log(array2)
//isso retornará [2,6,10,16,22]
~~~
#### Filter
Não substitui o _array_ original
### Erros customizáveis
Existem vários tipos de errors, mas não há diferenças significativas, são mais para melhorar a leitura do código 

### Classes
#### Usando o super()
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
