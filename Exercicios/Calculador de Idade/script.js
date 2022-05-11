
   const aluno1 = {
        nome: 'Joao',
        nota: 5,
        turma: '1B',
        idade: 15
    };
    
    const aluno2= {
        nome: 'Maria',
        nota: 10,
        turma: '3A',
        idade: 20
    };

    const aluno3={
        nome: 'Marcos',
        nota: 8,
        turma: '3B',
        idade: 22
    };

    const aluno4={
        nome: 'Pedro',
        nota: 4,
        turma: '1A',
        idade: 26
    };
    
    const aluno5={
        nome: 'Bruno',
        nota: 8,
        turma: '2C',
        idade: 14
    };

function calculaidade(futuro){
    console.log('Essa pessoa tem '+ this.idade +' anos e terá '+(this.idade+futuro)+' anos daqui a '+futuro+' anos');

}

calculaidade.call(aluno5, 60);