const itemlista = document.getElementById("lista");

function addlista(){
    if(document.getElementById("inputtext")!=="")
        var textolista = document.createElement(li);
        itemlista.innerHTML=textolista;
}
document.getElementById("add").addEventListener("click",addlista)