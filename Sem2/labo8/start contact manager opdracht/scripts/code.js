let personen = [];


const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    
    let result = valideer();
    if (result === 0){
       
        let voornaam = document.getElementById('txtVoornaam');
        let achternaam = document.getElementById('txtFamilienaam');
        let geboortedatum = document.getElementById('txtGeboorteDatum');
        let email = document.getElementById('txtEmail');
        let aantalkids = document.getElementById('txtAantalKinderen');
        let contact={
            cvoornaam : voornaam.value,
            cachternaam : achternaam.value,
            cgeboortedatum : geboortedatum.value,
            cemail : email.value,
            caantalkids : aantalkids.value,
        }
        let lstPersonen = document.getElementById("lstPersonen");
        if(lstPersonen.selectedIndex >= 0){
            personen[lstPersonen.selectedIndex] = contact;
            let alleOptions = document.querySelectorAll('option');
            let aanpassen = alleOptions[lstPersonen.selectedIndex];
            aanpassen.value = voornaam.value + " " + achternaam.value;
            aanpassen.innerText = voornaam.value + " " + achternaam.value;
        }
        else{
            personen.push(contact);
            let optie = document.createElement("option");
            optie.innerText = voornaam.value + " " + achternaam.value;
            optie.value = voornaam.value + " " + achternaam.value;
            lstPersonen.appendChild(optie)
            console.log(personen[0])
        }

    }
    else{
        console.log("error")
    }

   };


const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    let voornaam = document.getElementById('txtVoornaam');
    voornaam.value = '';
    let achternaam = document.getElementById('txtFamilienaam');
    achternaam.value = '';
    let geboortedatum = document.getElementById('txtGeboorteDatum');
    geboortedatum.value = '';
    let email = document.getElementById('txtEmail');
    email.value = '';
    let aantalkids = document.getElementById('txtAantalKinderen');
    aantalkids.value = '';
    let alleOptions = document.querySelectorAll('option');
    for(let i = 0; i < alleOptions.length; i++){
        alleOptions[i].selected = false;
    }
};

const aanklikken = () =>{
    console.log("Wohoo!")
    let show = document.getElementById("lstPersonen").selectedIndex;
    let contact = personen[show];
    document.getElementById('txtVoornaam').value = contact.cvoornaam;
    document.getElementById('txtFamilienaam').value = contact.cachternaam;
    document.getElementById('txtGeboorteDatum').value = contact.cgeboortedatum;
    document.getElementById('txtEmail').value = contact.cemail;
    document.getElementById('txtAantalKinderen').value = contact.caantalkids;

}

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", aanklikken);
   
};

window.addEventListener("load", setup);