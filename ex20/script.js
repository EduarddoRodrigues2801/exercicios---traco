

function exercicio1(){
    
   
    let inicial = parseFloat(document.getElementById("txtinicio").value);
    let final = parseFloat(document.getElementById("txtfinal").value);

    
    let resultado = document.getElementById("conteudoresultado");
    var soma = 0 ;
        
    for (i = inicial; i<= final; i++ ){
        var acumulador = 0
        var soma = soma + i
        resultado.innerHTML = "Resultado: "+soma ; 
     }
    
    
    
}

function novo(){
    document.location.reload(true);

}

