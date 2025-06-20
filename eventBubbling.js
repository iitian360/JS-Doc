const mainDiv=document.getElementById("mainDiv");
const name_=document.getElementById("name");
const btn=document.getElementById("btn");
const sec=document.getElementById("sec");

mainDiv.addEventListener("click",()=>console.log('Main div cliked'));
name_.addEventListener("click",()=> console.log('P tag content clicked'));
btn.addEventListener("click",()=> console.log('btn clicked'))
sec.addEventListener("click",()=>console.log('section clicked'));
