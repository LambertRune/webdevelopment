let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let familieNaam1 = document.getElementById("txtFamilienaam").value;
    // valideer alle input data en controleer of er geen errors meer zijn
    let selector = document.getElementById("lstPersonen");
    let selectedIndex = selector.selectedIndex;
    if(personen.length<10){
        if(familieNaam1!==""){
            valideer();
            let persoon ={
                voornaam: document.getElementById("txtVoornaam").value,
                familieNaam: familieNaam1,
                geboortedatum: document.getElementById("txtGeboorteDatum").value,
                mail:document.getElementById("txtEmail").value,
                aantalKinderen: document.getElementById("txtAantalKinderen").value
        
            }
            
            personen.push(persoon);
            
            let selector = document.getElementById("lstPersonen");
            let newOption = document.createElement('option'); 
            newOption.textContent = persoon.voornaam + " " + persoon.familieNaam; 
            selector.appendChild(newOption); 
        }
        else{
            personen[selectedIndex].familieNaam = familieNaam1;
            valideer();
            personen[selectedIndex].voornaam = document.getElementById("txtVoornaam").value;
            personen[selectedIndex].geboortedatum= document.getElementById("txtGeboorteDatum").value;
            personen[selectedIndex].mail= document.getElementById("txtGeboorteDatum").value;
            personen[selectedIndex].aantalKinderen== document.getElementById("txtAantalKinderen").value;
        }
       
    }
    else{
        console.log("max lengte bereikt");
    }
    
    };

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    
    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let selector = document.getElementById("lstPersonen");



    selector.addEventListener('change', function() {

    let selectedIndex = selector.selectedIndex; 
    document.getElementById("txtVoornaam").value = personen[selectedIndex].voornaam;
    document.getElementById("txtFamilienaam").value = personen[selectedIndex].familieNaam;
    document.getElementById("txtGeboorteDatum").value = personen[selectedIndex].geboortedatum;
    document.getElementById("txtEmail").value = personen[selectedIndex].mail;
    document.getElementById("txtAantalKinderen").value = personen[selectedIndex].aantalKinderen;
    

    })
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);