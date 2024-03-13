const setup =() =>{
    let button = document.getElementById("button");
    button.addEventListener("click",deNaarHet);
}
const deNaarHet=() =>{
    let input = document.getElementById("input").value;
    let array = input.split(" ");
    let resultaat = "";
    
    for(let i=0; i<array.length;i++){
        if(array[i]==="de"){
            array[i]="het";
        }
        else if(array[i]==="De"){
            array[i]="Het";
        }
        
        
    }
    for(let i = 0; i<array.length;i++){
        

            resultaat+=array[i]+" ";
        

    }
    
    
    console.log(resultaat.trim());
}
window.addEventListener("load",setup);