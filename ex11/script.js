

function exercicio1(){
    
    let nota1 = parseFloat(document.getElementById("txtnota1").value);
    let nota2 = parseFloat(document.getElementById("txtnota2").value);

    let final = (nota1 + nota2)

    if(final >= 60){
        var resnota = " "
    }else{
     var resnota = "REPROVADO"
    }
    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Primeiro Nota: "+ nota1.toFixed(1) + " Segundo nota: " + nota2.toFixed(1) +" Nota Final: " + final.toFixed(1) +" " + resnota;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisnota1(){
    var nota1 = parseFloat(document.getElementById("txtnota1").value);
    var nota1d = document.getElementById("txtnota1");
    nota1d.value =nota1.toFixed(1)
    
   }
   
function decimaisnota2(){
    var nota2 = parseFloat(document.getElementById("txtnota2").value);
    var nota2d = document.getElementById("txtnota2");
    nota2d.value =nota2.toFixed(1)
    
   }