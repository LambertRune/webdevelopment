const setup = () =>{
    let button = document.getElementById("button");
    button.addEventListener("click",maakTrigram);
}
function maakTrigram(){
    let input = document.getElementById("input").value;
    let triagram = "";
    for (let i =0; i<input.length-2;i++){
        triagram= input.substring(i,i+3);
        
        console.log(triagram);
    }
}
window.addEventListener("load",setup);