const setup = () =>{
    let slider = document.getElementsByClassName("slider");
    let button = document.getElementById("button");
    
    button.addEventListener("click", addcolor);
    
    
    for(let i=0; i<slider.length;i++){
        slider[i].addEventListener("input", functie);
        slider[i].addEventListener("change",functie)
    }
    
    functie();


}
const functie = () =>{
    let slider = document.getElementsByClassName("slider");
    let box = document.getElementsByClassName("box");
    let text = document.getElementsByClassName("text");
    
    
    let slider0 = slider[0].value;
    let slider1 = slider[1].value;
    let slider2 = slider[2].value;
    
    text[0].innerHTML = "255 Red: "+slider0;
    text[1].innerHTML = "255 Green: "+slider1;
    text[2].innerHTML = "255 Blue: "+slider2;

    box[0].style.backgroundColor = "rgb("+slider0+","+slider1+","+slider2+")";
    box[0].addEventListener("click",original)
}
const original = (click)=>{
    
    let slider = document.getElementsByClassName("slider");
    let box = document.getElementsByClassName("box");
    let slider0 = slider[0].value;
    let slider1 = slider[1].value;
    let slider2 = slider[2].value;
    
    box[0].style.backgroundColor = "rgb("+slider0+","+slider1+","+slider2+")";

}
const addcolor = () =>{

    let item = document.getElementsByClassName ("items")[0];
    let slider = document.getElementsByClassName("slider");
    const colorBox = document.createElement("div");
    const button = document.createElement("button");
    
    let slider0 = slider[0].value;
    let slider1 = slider[1].value;
    let slider2 = slider[2].value;

    colorBox.style.backgroundColor = "rgb("+slider0+","+slider1+","+slider2+")";
    colorBox.className = "colorBox";
    button.style.float="right";
    button.innerHTML="x";
    button.type="button";
    button.id="removeButton";
    button.className="remove";
    
    item.appendChild(colorBox);
    colorBox.appendChild(button)

    button.addEventListener("click",remove);
    item.addEventListener("click",showColor);

}

const remove = (click) =>{
    
   
    click.target.parentNode.remove();

}
const showColor = (click)=>{
    let box = document.getElementsByClassName("box");
    let colors = click.target.style.backgroundColor;
    console.log(colors);
    box[0].style.backgroundColor = click.target.style.backgroundColor;
}
window.addEventListener("load",setup);