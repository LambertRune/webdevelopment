
const setup =()=>{
    let button = document.getElementById("button");
    let txt = document.getElementById("textbox").innerHTML;

    button.addEventListener("click",print);


}
const print = ()=>{
    let txt = document.getElementById("textbox").value;

    console.log(txt.substring(1,5));
}
window.addEventListener("load",setup);