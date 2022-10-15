

function exercicio1(){
    let precounit = parseFloat(document.getElementById("txtprecounit").value);
    let qtde = parseFloat(document.getElementById("txtqtde").value);
    let valorrecebido = parseFloat(document.getElementById("txtvalorrecebido").value);
    

    let troco = valorrecebido - (precounit * qtde)
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Preço Unit R$: " + precounit+ "<br>Qtde: " + qtde +"<br>Valor Recebido R$:  " + valorrecebido + "<br>Troco R$:  " + troco.toFixed(2) ;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaispreco(){
 var preco = parseFloat(document.getElementById("txtprecounit").value);
 var precod = document.getElementById("txtprecounit");
 precod.value =preco.toFixed(2)


}
function decimaisvalor(){
    var valor = parseFloat(document.getElementById("txtvalorrecebido").value);
    var valord = document.getElementById("txtvalorrecebido");
    valord.value =valor.toFixed(2)
   
   
   }
  
   
   
   


