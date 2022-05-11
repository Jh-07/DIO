var novoArr=[];
const alunos = [
    {
       // nome: 'Joao',
        nota: 5,
        turma: '1B',
    },
    
    {
        //nome: 'Maria',
        nota: 10,
        turma: '3A',
    },

    {
        //nome: 'Marcos',
        nota: 8,
        turma: '3B',
    },

    {
        //nome: 'Pedro',
        nota: 4,
        turma: '1A',
    },
    
    {
        //nome: 'Bruno',
        nota: 8,
        turma: '2C',
    },
];
for (i=0; i< alunos.length;i++){
    const {nome,nota} = alunos[i];

    if(nota>5){
        novoArr.push(nome);
    }
}
console.log("Lista de alunos aprovados: " + novoArr);