function resetButtonProcessing(){
    const response = window.confirm("Do you really want to reset textual entries?");
    if(response){
        return alert("OK");
    }else{
        let nodesArr = document.getElementsByClassName("params");
        for (let index = 0; index < nodesArr.length; index++) {
            let element = nodesArr[index];
            element.innerHTML = "";
        }
    }
}




setInterval(function() {
    let japaneseDateTime = new Date();
    let timeP = document.getElementById("timeP");
    
    let h = japaneseDateTime.getHours();
    let m = japaneseDateTime.getMinutes();
    let s = japaneseDateTime.getSeconds();
    
    //regulisanje moguceg prekoracenja 24-satnog sistema 
    if(h+8 > 24){
        h = (h+8) - 24;
    }

    timeP.innerHTML = h + "h; " + m + "min; " + s + "seconds";
}, 1000);
