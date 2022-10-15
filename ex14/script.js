

function exercicio1(){
    
    let preco = parseFloat(document.getElementById("txtpreco").value);
    let qtde = parseFloat(document.getElementById("txtqtde").value);
    let valor = parseFloat(document.getElementById("txtvalor").value);
    
    let valorpagar = (preco * qtde);
    var troco = (valor - valorpagar).toFixed(2);

    if(valor > valorpagar ){
        var diferenca ="TROCO = R$ " + troco;
    }else{
        var diferenca = "DINHEIRO INSUFICIENTE, FALTAM "+ ((valorpagar - valor).toFixed(2)) + " REAIS"
    }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = diferenca ; 
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaispreco(){
    var preco = parseFloat(document.getElementById("txtpreco").value);
    var precod = document.getElementById("txtpreco");
    precod.value =preco.toFixed(2)
      
   }
   function decimaisvalor(){
    var valor = parseFloat(document.getElementById("txtvalor").value);
    var valord = document.getElementById("txtvalor");
    valord.value =valor.toFixed(2)
      
   }