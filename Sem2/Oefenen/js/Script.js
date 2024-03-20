const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", functie);

}
const functie = () => {
    let radio = document.getElementById("radio").checked;
    let radio1 = document.getElementById("radio1").checked;
    let radio2 = document.getElementById("radio2").checked;


    let css = document.getElementById("t");


    if (radio) {

        css.backgroundImage = url('Images/1.png');
    } else if (radio1) {
        css.backgroundImage = "url('Images/2.png')";
    } else if (radio2) {
        css.backgroundImage = "url('Images/3.png')";
    }

}
window.addEventListener('load', setup);