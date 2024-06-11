let global = {
    wachten: 3000,
    gokken: 0,
    timeoutId: 2500 // id van de timeout timer, zodat we die kunnen annuleren
};

let woorden = [];
woorden.push('neger','bierr','mamam');
let gekozenWoord = woorden[Math.floor(Math.random() * woorden.length)];
let gekozenWoordGesplitst = gekozenWoord.split('');
console.log(gekozenWoord);

const setup = ()=>{
    document.getElementById("go").style.display = "none";

    let text = document.getElementById("gok");
    text.disabled = true;
    document.getElementById("nieuw").addEventListener("click", startSpel)
    let i = 0;

    text.addEventListener("keydown",function (event){
        if(event.key === "Enter"){
           let array = text.value.split('');
            if(array.length === 5 && i<5){
                text.value = "";
                gok(array,i);
                i++;
            }
            if(i>=5){
                stopSpel()
            }
            let letters = document.getElementsByClassName("letter");
            for (let i=0;i<letters.length;i++) {
                letters[i].addEventListener("click", toonHelp);
            }
        }

    });


}
let helpInterval;
const toonHelp = (event) => {

    let para = document.getElementsByClassName("help");
     para[0].classList.remove("hidden");
     para[0].textContent=event.target.textContent;



    helpInterval = setInterval(verwijderHelp, 2500);
}
const verwijderHelp = (event) => {

    let para = document.getElementsByClassName("help");
    para[0].classList.add("hidden");
    clearInterval(helpInterval);
}
const startSpel =()=>{
    document.getElementById("go").style.display = "";
    document.getElementById("gok").disabled = "";
    document.getElementById("nieuw").disabled= "disabled";
    document.getElementById("go").disabled= "disabled";
    naamOpslaan(window.prompt("naam speler:"));


}

const gok =(array,id) =>{
    const node = document.getElementById("gokken");
    const div = document.createElement("div");
    div.id = id;
    div.className = "letter";
    node.appendChild(div);


    for(let i=0; i<array.length; i++){
        let element = document.createElement("div");
        if(array[i] === gekozenWoordGesplitst[i]){
            element.className = "juist";
        }
        else if(letterZitInHetWoord(array[i])){
            element.className = "bevat";
        }
        else{
            element.className = "fout";
        }

        element.textContent = array[i];
        div.appendChild(element);

    }


}
const woordGeraden = (woord) =>{
    if(woord = gekozenWoord.toString()){
        stopSpel()
    }
}
const scorebordAanvullen=()=>{
    let highscores = document.getElementById("highscores");
    let li = document.createElement("li")
}
const stopSpel = () =>{
    document.getElementById("go").style.display = "none";
    document.getElementById("gok").disabled = "";
    document.getElementById("nieuw").disabled= "disabled";
    document.getElementById("go").disabled= "disabled";

}
const letterZitInHetWoord =(letter) =>{
    let resultaat = false;
    for(let i=0; i<gekozenWoordGesplitst.length; i++){
        if(letter === gekozenWoordGesplitst[i]){
            resultaat =true;
        }
        console.log(gekozenWoordGesplitst.length);

    }
    return resultaat;
}

window.addEventListener('load', setup);