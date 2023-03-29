var clickMenu=document.getElementById("desplegar");
var clickMenu1=document.getElementById("contraer");
var mouseSobreZapatilla=document.getElementById("zapatilla");


clickMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="20px";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("desplegar").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="visible";
});
clickMenu1.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-40px";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="hidden";
    document.getElementById("desplegar").style.visibility="visible";
})
mouseSobreZapatilla.addEventListener("mouseover",()=>{
    document.getElementById("zapatilla").style.left="-360px";
    document.getElementById("zapatillas").style.left="150px";
    document.getElementById("zapatillaas").style.left="0px";
});
mouseSobreZapatilla.addEventListener("mouseout",()=>{
    document.getElementById("zapatilla").style.left="0px";
    document.getElementById("zapatillas").style.left="0px";
    document.getElementById("zapatillaas").style.left="0px";
});