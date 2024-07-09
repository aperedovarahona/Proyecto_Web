

function validarColegio(){
    function validarColegio(){
        var campo1=document.getElementById("direccion");
        var campo0=document.getElementById("fname");
        var campo2=document.getElementById("colegio");
    
        if (campo1.value!=campo0.value){
            campo2.disabled=true;
            print("entra");
        }
        else{
            campo2.disabled=false;
        }
    }
}

form.addEventListener("keyup",validarColegio)