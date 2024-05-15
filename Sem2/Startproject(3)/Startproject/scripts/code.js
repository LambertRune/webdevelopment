let arrayWoord = "fdfjj";
let tezoekenwoord=[];
tezoekenwoord= arrayWoord.split("");
const setup =()=>{
    document.getElementById("gok").disabled = true;
    document.getElementById("go").disabled=true;
    document.getElementById("nieuw").addEventListener("click",nieuwSpel);

    const gok = document.getElementById("go");

    gok.addEventListener("click",go);



    
    

    
}

const nieuwSpel =()=>{
    document.getElementById("gok").disabled = false;
    document.getElementById("go").disabled=false;
    document.getElementById("nieuw").style.display="none";
    
}
const go=()=>{
    if(isInput5lang()){

        let woord = document.getElementById("gok").value;
        let array = woord.split("");
        const div = document.createElement("div");
        document.getElementById("gokken").appendChild(div);
        console.log(tezoekenwoord);
            

        for(let i=0; i<woord.length;i++){
            let letter = document.createElement("div");
            letter.innerText = array[i];
           if(tezoekenwoord[i]===letter.innerText){
            letter.classList.add("juist");
           }
           else if(arrayWoord.includes(letter.innerText)){
            letter.classList.add("bevat");
           }
           else{
            letter.classList.add("fout")
           }
           
           
           div.appendChild(letter);
        }
    
    
    }
   
    
    


}

const isInput5lang=()=>{
    const input = document.getElementById("gok").value;
    

    let result = false;

    if(input.length===5){
        result = true; 
        
    }
   
    
    return result;
}
window.addEventListener("load",setup);