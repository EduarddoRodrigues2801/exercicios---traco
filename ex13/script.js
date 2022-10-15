

function exercicio1(){
    
    let quant = parseFloat(document.getElementById("txtquant").value);
    
    if(quant <= 100 ){
        var valor = 50;
    }else{
        var valor = ((quant - 100)*2)+50
    }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML =  "Valor a pagar: R$ " + valor; 
    
    
}

function novo(){
    document.location.reload(true);

}