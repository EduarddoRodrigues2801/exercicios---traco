

function exercicio1(){
    
    let cof1 = parseFloat(document.getElementById("txtcof1").value);
    let cof2 = parseFloat(document.getElementById("txtcof2").value);
    let cof3 = parseFloat(document.getElementById("txtcof3").value);
    
    let delta = Math.sqrt((cof2 * cof2) - (4 * cof1 * cof3))
    let base = 2 * cof1
    let raiz1 = (-(cof2) + delta)/base
    let raiz2 = (-(cof2) - delta)/base

    if (delta >= 0 ){
        var result = "X1= " + raiz1 + "   X2= " + raiz2
        
    }else{
        var result = " Esta equação Não possui Raízes"
    }
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML =  result; 
    
    
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