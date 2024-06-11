const setup = () => {
    
    
    let btnSubstring = document.getElementById("button");
    btnSubstring.addEventListener("click", substringWoord);
    
}
const substringWoord = () => {
    let beginIndex = document.getElementById("beginNummer").value;
    let eindIndex = document.getElementById("eindNummer").value;
    let output = document.getElementById("txtOutput");
    output = output.substring(beginIndex,eindIndex).innerText;
    
}


window.addEventListener("load", setup());