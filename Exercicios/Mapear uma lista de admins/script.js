const lista = new Map();
lista.set('Romena', 'User');
lista.set('Roberto', 'Admin'); 
lista.set('Amanda', 'User');
lista.set('Bruno', 'User');
lista.set('Pedro', 'Admin');
function getAdmin(map){
    var admins=[];
    for ([nome,valor] of map){
        if(valor=='Admin'){
            {
                admins.push(nome);
            }
        }
    }
    console.log(admins);
}
getAdmin(lista);