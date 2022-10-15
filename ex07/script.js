

function exercicio1(){
    
    let distancia = parseFloat(document.getElementById("txtdistancia").value);
    let combustivel = parseFloat(document.getElementById("txtcombustivel").value);

    let consumo = (distancia / combustivel);



    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Consumo médio " + consumo.toFixed(3);
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaiscombustivel(){
 var combustivel = parseFloat(document.getElementById("txtcombustivel").value);
 var combustiveld = document.getElementById("txtcombustivel");
 combustiveld.value =combustivel.toFixed(1)


}
   
   
   


