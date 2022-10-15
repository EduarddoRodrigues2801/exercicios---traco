

function exercicio1(){
    
    let valor1 = parseFloat(document.getElementById("txtvalor1").value);
    let valor2 = parseFloat(document.getElementById("txtvalor2").value);

    let teste = parseInt(valor2 / valor1 )
    let teste1 = teste * valor1;

    let teste2 = parseInt(valor1 / valor2 )
    let teste22 = teste2 * valor2;

    if(teste1 == valor2 || teste22 == valor1){
        var resposta ="São Multiplos"
    }else{
        var resposta ="Não são multiplos"
    }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML =  resposta; 
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisglicose(){
    var glicose = parseFloat(document.getElementById("txtglicose").value);
    var glicosed = document.getElementById("txtglicose");
    glicosed.value =glicose.toFixed(2)
      
   }
   function decimaisvalor(){
    var valor = parseFloat(document.getElementById("txtvalor").value);
    var valord = document.getElementById("txtvalor");
    valord.value =valor.toFixed(2)
      
   }