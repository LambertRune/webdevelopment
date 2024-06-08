let arrayWoord = ["elize","bartj","neger"];

let tezoekenwoord=[];
tezoekenwoord= arrayWoord[Math.floor(Math.random()*arrayWoord.length)].split('');


const setup =()=>{
    document.getElementById("gok").disabled = true;
    document.getElementById("go").disabled=true;
    document.getElementById("nieuw").style.display="show";
    document.getElementById("nieuw").addEventListener("click",nieuwSpel);
    
    const gok = document.getElementById("go");

    gok.addEventListener("click",go);

}

const nieuwSpel =()=>{
    let name = prompt("vul uw naam in");
    let p = document.createElement('p');

    p.innerText = name;
    document.getElementById("highscores").appendChild(p);
    
    if(prompt==null||name==""){
        return;
    }
    localStorage.setItem("aantalKeerGeraden",0);
    localStorage.setItem("woordGeraden",0);
    document.getElementById("gok").disabled = false;
    document.getElementById("go").disabled=false;
    document.getElementById("nieuw").style.display="none";
    
}
const go=()=>{
    if(isInput5lang()){

        let woord = document.getElementById("gok").value;
        let array = woord.split("");
        
        
            
        if(localStorage.getItem("aantalKeerGeraden")<5&&localStorage.getItem("woordGeraden")<5){
            const div = document.createElement("div");
            document.getElementById("gokken").appendChild(div);

            let aantalKeerGeraden = localStorage.getItem("aantalKeerGeraden");
            let juisteLetters = 0;
            aantalKeerGeraden++;
            localStorage.setItem("aantalKeerGeraden",aantalKeerGeraden);

            for(let i=0; i<woord.length;i++){
                let letter = document.createElement("div");
                letter.innerText = array[i];
               if(tezoekenwoord[i]===letter.innerText){
                letter.classList.add("juist");
                juisteLetters++;
               }
               else if(tezoekenwoord.includes(letter.innerText)){
                letter.classList.add("bevat");
               }
               else{
                letter.classList.add("fout")
               }
               
               
               div.appendChild(letter);
            }
            localStorage.setItem("woordGeraden",juisteLetters);
        }
        if(localStorage.getItem("woordGeraden")==5){
            complete();
            setup();
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

const complete =() =>{
     
}
window.addEventListener("load",setup);