const setup = () => {
let button = document.getElementById("button");
button.addEventListener("click",uitvoeren);
}
const uitvoeren = ()=>{
     console.log("hey");
     let isRoker = document.getElementById("roker").checked;
     const keuzeMoedertaal = document.getElementsByTagName("moedertaal").value;
     let buurLand = document.getElementById()
     console.log(keuzeMoedertaal);
}
window.addEventListener("load",setup);