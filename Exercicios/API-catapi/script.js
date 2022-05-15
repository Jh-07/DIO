const getCat = async () =>{
   const data = await fetch('https://thatcopy.pw/catapi/rest/');
   const json = await data.json();
   document.getElementsByTagName('img')[0].src = json.webpurl;}
getCat()
const botao = document.getElementsByTagName('button')[0].addEventListener('click',getCat);