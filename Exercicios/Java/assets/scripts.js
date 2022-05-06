var x = document.getElementById('currentNumber')
var cx = 0;
function increment(){
    cx = cx +1;
    x.innerHTML= cx;
}
function decrement(){
    cx = cx -1;
    x.innerHTML= cx;
}