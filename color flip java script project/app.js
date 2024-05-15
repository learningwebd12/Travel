const getcolor = () => {
const randomnumber =Math.floor (Math.random()*16777215);
const randomCode ="#" + randomnumber.toString(16);
document.body.style.background=randomCode; 
document.getElementById("color-code").innerHTML=randomCode;
navigator.clipboard.writeText(randomCode)
}

document.getElementById("btn").addEventListener("click", getcolor)
getcolor();