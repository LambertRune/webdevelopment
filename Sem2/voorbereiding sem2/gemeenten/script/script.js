const setup = () =>{
    let gemeentes =[];
    let stop =false;
    while(!stop){
        let input = window.prompt("geef een gemeente op");
        if(input ==="stop"){
            stop=true;
        }
        else{
            gemeentes.push(input);
        }

    }
    gemeentes.sort();
    for(let i = 0; i < gemeentes.length; i++){
        waardesToevoegen(gemeentes[i]);
    }
}

const waardesToevoegen =(waarde)=>{
    let option = document.createElement("option");
    let element = document.getElementById("gemeentes");

    option.text = waarde;
    element.appendChild(option);

}
window.addEventListener('load', setup)