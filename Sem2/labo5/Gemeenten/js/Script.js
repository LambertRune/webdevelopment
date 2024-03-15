
const setup=() =>{
    startUp()

    
}
const startUp= ()=>{
    let stop = false;
    let gemeentes=[];
    let select=document.getElementById("gemeentes");
    while(stop===false){
        let gemeente = window.prompt("geef een gemeente op", "onbekend");

        if(gemeente==="stop"){
            stop=true;
        }
        else{
            gemeentes.push(gemeente);
        }
    }
    gemeentes =gemeentes.sort();
    console.log(gemeentes);

    for (let i = 0; i < gemeentes.length; i++){
        let input = gemeentes[i];
        select.innerHTML += `<option value="${input}">${input}</option>`;
    }
}
window.addEventListener("load",setup);