var estado= ["Delgadez severa","Delgadez moderada","Delgadez aceptable","Normal","Pre-Obeso","Obesp tipo I","Obesp tipo II","Obesp tipo III"];

function cargarEstados(){
    
    /*=============================================
    =            For            =
    =============================================*/
    for (let i = 0; i < estado.length; i++) {
        document.getElementById("todosEstados").innerHTML += "<p>"+ estado[i];+"</p>" ;
         
    }
    /*=====  End of For  ======*/ 
}
function imc() {
    var peso = prompt("introduce tu peso(Kg)");
    var altura =prompt("introduce tu estatura(cm)");
   
    
    
    
    /*=============================================
    =            if                               =
    =============================================*/
    
    if(peso !=null && altura !=null){
        var imc = (peso/(altura**2)) *10000;
        
       
       imc= imc.toPrecision(4);
        document.getElementById("resultado").innerHTML ="Tu IMC es :"+ imc+".";
        imc = parseFloat(imc);
        
        /*=============================================
        =            Switch            =
        =============================================*/
        
       
        switch (true) {
            case (imc <= 16,00):
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[0]+".";
                break;
            case (imc <= 16.99):
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[1]+".";
                break;
            case (imc <= 18.49):
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[2]+".";
                break;
            case (imc <= 24.99):
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[3]+".";     
                break;
            case (imc <= 29.99):
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[4]+".";    
                break;
            case (imc <= 34.99):
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[5]+".";     
                break;
            case (imc <= 39.99):
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[6]+".";     
                break;
            case (imc >= 40) :
            document.getElementById("estado").innerHTML ="Tu estado actual es :" + estado[7]+".";    
                break;
            default:
                break;
        } /*=====  End of Switch  ======*/
        
    /*=====  End of if  ======*/
    

                    
                    /*=============================================
                    =            else            =
                    =============================================*/
    }else{
        alert("Debes introducir algun dato");
    }
                     /*=====  End of else  ======*/
}