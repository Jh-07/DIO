function mudar(){
   body[0].classList.toggle("darkmode-background");
   header.classList.toggle("darkmode-div");
   if(header.classList.contains('darkmode-div')){
       document.getElementsByTagName('h1')[0].innerHTML = 'Dark Mode'
       document.getElementById('botao').innerHTML= 'Change to Light Mode'
   }
   else{
    document.getElementsByTagName('h1')[0].innerHTML = 'Light Mode'
    document.getElementById('botao').innerHTML= 'Change to Dark Mode'
   }

}
document.getElementById("botao").addEventListener("click",mudar);
const body = document.getElementsByTagName('body');
const header = document.getElementById("centro");