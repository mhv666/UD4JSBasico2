function imc() {
    var peso = prompt("introduce tu peso(Kg)");
    var altura =prompt("introduce tu estatura(cm)");
    
    
    if(peso !=null && altura !=null){
        var imc = (peso/(altura**2)) *10000;
       imc= imc.toPrecision(4);
        document.getElementById("resultado").innerHTML ="Tu IMC es :"+ imc+".";
        
    }
}