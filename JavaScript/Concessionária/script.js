const faqBtn =
document.querySelectorAll(".faq-btn");

faqBtn.forEach(btn=>{

btn.addEventListener("click",()=>{

btn.classList.toggle("ativo");

const content =
btn.nextElementSibling;

if(content.style.maxHeight){

content.style.maxHeight=null;

}else{

content.style.maxHeight=
content.scrollHeight+"px";

}

});

});