const setup =()=>{
    const verjaardag = new Date('2004-05-18');
    const vandaag = new Date();
    const resultaat = (vandaag.getTime()-verjaardag.getTime())/1000/60/60/24;
    
    console.log(Math.floor(resultaat));
}
window.addEventListener("load",setup);