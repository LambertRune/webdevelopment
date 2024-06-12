let global = {
    atlKeerGegokt:0,
    atlgokken: 5,
    timeoutId: 2500 // id van de timeout timer, zodat we die kunnen annuleren
};
let huidigenaam

let woorden = [];
woorden.push('neger','bierr','mamam');
let gekozenWoord = woorden[Math.floor(Math.random() * woorden.length)];
let gekozenWoordGesplitst = gekozenWoord.split('');
console.log(gekozenWoord);

const setup = ()=>{
    document.getElementById("clear").addEventListener('click', resetHighscores)
    document.getElementById("go").style.display = "none";
    let text = document.getElementById("gok");
    text.disabled = true;
    document.getElementById("nieuw").addEventListener("click", startSpel)


    text.addEventListener("keydown",function (event){
        if(event.key === "Enter"){
           let array = text.value.split('');
            if(array.length === 5 && global.atlKeerGegokt<global.atlgokken){
                woordGeraden(text.value)
                text.value = "";
                gok(array,global.atlKeerGegokt);
                global.atlKeerGegokt++;

            }
            if(global.atlKeerGegokt>=5){
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


    clearInterval(helpInterval);
    helpInterval = setInterval(verwijderHelp, global.timeoutId);
}
const verwijderHelp = (event) => {

    let para = document.getElementsByClassName("help");
    para[0].classList.add("hidden");
    clearInterval(helpInterval);
}
const startSpel =()=>{
    huidigenaam = window.prompt("naam speler:")
    document.getElementById("go").style.display = "";
    document.getElementById("gok").disabled = "";
    document.getElementById("nieuw").disabled= "disabled";
    document.getElementById("go").disabled= "disabled";
    let gokken = document.getElementById("gokken")

    //alle kinderen verwijderen
    while(gokken.firstElementChild){
        gokken.removeChild(gokken.firstChild);
    }



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
    if(woord === gekozenWoord.toString()){
        stopSpel()
    }

}

const stopSpel = () =>{
    document.getElementById("go").style.display = "";
    document.getElementById("gok").disabled = true;
    document.getElementById("nieuw").disabled= false;
    document.getElementById("go").disabled= "disabled";
    namenOpslaan();
    global.atlKeerGegokt=0;
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
const namenOpslaan = (naam, atlgokken) => {
    // Lees gegevens uit localStorage
    let namen = JSON.parse(localStorage.getItem("scorebordNamen")) || [];
    let gokken = JSON.parse(localStorage.getItem("gokken")) || [];
    let datum = JSON.parse(localStorage.getItem("datum")) || [];

    // Huidige datum en tijd ophalen
    const huidigeDatum = new Date();
    const jaar = huidigeDatum.getFullYear();
    const maand = String(huidigeDatum.getMonth() + 1).padStart(2, '0'); // Maanden zijn 0-gebaseerd
    const dag = String(huidigeDatum.getDate()).padStart(2, '0');
    const uur = String(huidigeDatum.getHours()).padStart(2, '0');
    const minuten = String(huidigeDatum.getMinutes()).padStart(2, '0');
    const seconden = String(huidigeDatum.getSeconds()).padStart(2, '0');

    // Voeg nieuwe gegevens toe
    namen.push(huidigenaam);
    gokken.push(global.atlKeerGegokt+1);
    datum.push(`${jaar}-${maand}-${dag} ${uur}:${minuten}:${seconden}`);

    // Sla de bijgewerkte lijsten op in localStorage
    localStorage.setItem("scorebordNamen", JSON.stringify(namen));
    localStorage.setItem("gokken", JSON.stringify(gokken));
    localStorage.setItem("datum", JSON.stringify(datum));

    // Werk de highscore lijst bij
    updateHighscoreList();
};

const updateHighscoreList = () => {
    // Lees gegevens uit localStorage
    let namen = JSON.parse(localStorage.getItem("scorebordNamen")) || [];
    let gokken = JSON.parse(localStorage.getItem("gokken")) || [];
    let datum = JSON.parse(localStorage.getItem("datum")) || [];

    // Maak een gecombineerde lijst van objecten om eenvoudig te sorteren
    let scores = namen.map((naam, index) => ({
        naam: naam,
        gokken: gokken[index],
        datum: datum[index]
    }));

    // Sorteer de gecombineerde lijst op basis van gokken in oplopende volgorde
    scores.sort((a, b) => a.gokken - b.gokken);

    // Maak een <ol> als die nog niet bestaat
    let highscoresDiv = document.getElementById("highscores");
    let ol = highscoresDiv.querySelector("ol");
    if (!ol) {
        ol = document.createElement("ol");
        highscoresDiv.appendChild(ol);
    } else {
        // Verwijder bestaande <li>'s
        while (ol.firstChild) {
            ol.removeChild(ol.firstChild);
        }
    }

    // Voeg gesorteerde scores toe aan de geordende lijst
    scores.forEach(score => {
        let li = document.createElement("li");
        li.textContent = `${score.naam}, ${score.gokken}, ${score.datum}`;
        ol.appendChild(li);
    });
};
const resetHighscores = () => {
    // Verwijder de gegevens uit localStorage
    localStorage.removeItem("scorebordNamen");
    localStorage.removeItem("gokken");
    localStorage.removeItem("datum");

    // Verwijder alle kinderen van het highscore element
    let highscoresDiv = document.getElementById("highscores");
    let ol = highscoresDiv.querySelector("ol");
    if (ol) {
        while (ol.firstChild) {
            ol.removeChild(ol.firstChild);
        }
    }
};
window.addEventListener('load', setup);
window.addEventListener('load',updateHighscoreList);