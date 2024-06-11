const setup = () =>{    
    let button = document.getElementById("button");
    button.addEventListener("click",triagram)
}

const triagram = () =>{
    let input = document.getElementById("input").value;
    
    for(let i =0;i<input.length-2;i++){
        console.log(input.slice(i,i+3)); 
    }


}
window.addEventListener("load",setup)