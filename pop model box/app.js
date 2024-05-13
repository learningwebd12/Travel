var firstbtn=document.querySelector(".mainbtn");
const hover=document.querySelector(".model-box");
var close=document.querySelector(".fa-close");



firstbtn.addEventListener("click",()=>{
    hover.style.visibility="visible"
})

close.addEventListener("click",()=>{
    hover.style.visibility="hidden"
})


 



