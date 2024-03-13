const setup=() =>{
    let stop = false;
    let gemeentes=[]
    while(stop===false){
        let gemeente = window.prompt("gemeente:");
        if(gemeente!="stop"){
            gemeente +=gemeente+" ";
        }
    }
    
}