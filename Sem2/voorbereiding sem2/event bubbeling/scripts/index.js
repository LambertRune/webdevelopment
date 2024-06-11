const setup = () => {
    let texts=document.getElementsByClassName("text");
	for (let i=0;i<texts.length;i++) {
		texts[i].addEventListener("click", klik);
	}	
}


const klik = (event) => {
	event.target.style.color="red";
};

window.addEventListener("load", setup);