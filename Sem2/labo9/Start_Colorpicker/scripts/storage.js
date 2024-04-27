let global = {
    swatches:[]
}
const storeSliderValues = () => {

    let settings ={};
    let settingJSON;

    settings.red=parseInt(document.getElementById("sldRed").value);
    settings.green=parseInt(document.getElementById("sldGreen").value);
    settings.blue=parseInt(document.getElementById("sldBlue").value);


    settingJSON =JSON.stringify(settings);
    localStorage.setItem("colorPickerPro.be.settingSliders",settingJSON);
};

const restoreSliderValues = () => {
 let settings;
 let settingJSON = localStorage.getItem("colorPickerPro.be.settingSliders");
 if(settingJSON!=null){
    settings =JSON.parse(settingJSON);
 }
 else{
    settings={
        red:0,
        green:0,
        blue:0
    };
 }
 document.getElementById("sldRed").value = settings.red;
 document.getElementById("sldGreen").value = settings.green;
 document.getElementById("sldBlue").value = settings.blue;
};


const storeSwatches = () => {
    

        global.swatches = [];

        let sections = document.getElementsByTagName("section");
        let swatchesArray = [];
    
       
        for (let i = 0; i < sections.length; i++) {
            let section = sections[i]; 
            let swatches = section.querySelectorAll(".swatch");
            
            
            swatches.forEach((thisSwatch) => {
                if(thisSwatch.getAttribute("data-red")!==null||thisSwatch.getAttribute("data-red")!==null||thisSwatch.getAttribute("data-red")!==null){
                    swatchesArray.push(thisSwatch.getAttribute("data-red"));
                    swatchesArray.push(thisSwatch.getAttribute("data-green"));
                    swatchesArray.push(thisSwatch.getAttribute("data-blue"));                    
                    global.swatches.push(swatchesArray);
                    swatchesArray=[];
                }
                
            });
            
        }
        
        localStorage.setItem("colorpickerPro.be.Swatches", JSON.stringify(global.swatches));
    
    };
    
    
const restoreSwatches = () => {

    let swatches = JSON.parse(localStorage.getItem("colorpickerPro.be.Swatches"));
    swatches.forEach((thisSwatch)=>{
        let swatch = thisSwatch;
        addSwatchComponent(swatch[0],swatch[1],swatch[2])
        
    });
    
};

