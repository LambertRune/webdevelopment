const setup = () =>{
    let button = document.getElementById("valideer");
    button.addEventListener("click", valideer);
}
const valideer = ()=>{
    console.log(valideerVoornaam());
    if(valideerVoornaam() && valideerVoornaam()&&valideerAchternaam()&&valideerDatum()&&valideerEmail()&&valideerAantalKinderen()){
        window.alert("Proficiat!");
    }
}
const valideerVoornaam = () =>
{
    let voornaam = document.getElementById("voornaam").value;
    let errVoornaam = document.getElementById("errVoornaam");
    
   
    
    if (voornaam.length>30) {
        voornaam.className = "invalid";
        errVoornaam.innerHTML="max. 30 karakters";
        return false;
    }
    else{
        voornaam.className="";
        errVoornaam.innerHTML = "";
        return true;
    }
}
const valideerAchternaam = ()=>{
    let achterNaam = document.getElementById("familienaam").value;
    let errAchternaam = document.getElementById("errFamilienaam");
   
    
    achterNaam.className="";
    errAchternaam.className="";
    
    if(achterNaam.length>50){
        achterNaam.className="invalid";
        errAchternaam.innerHTML = "max. 50 karakters";
        return false;
    }
    else if(achterNaam.length===0){
        achterNaam.className="invalid";
        errAchternaam.innerHTML="veld is leeg";
        return  false;
    }
    else{
        achterNaam.className="";
        errAchternaam.innerHTML="";
        return true;
    }
    
}
const valideerDatum = ()=>{
return true;
}
const valideerEmail=()=>{
return true;
}
const valideerAantalKinderen = () =>{
return true;
}
window.addEventListener("load",setup);
