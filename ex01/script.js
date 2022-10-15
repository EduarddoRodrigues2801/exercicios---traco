

function exercicio1(){
    let largura = parseFloat(document.getElementById("txtlargura").value);
    let comprimento = parseFloat(document.getElementById("txtcomprimento").value);
    let valor = parseFloat(document.getElementById("txtvalor").value);

    let areaTotal = (largura * comprimento);
    let valorTotal = (areaTotal * valor);
    let valorForm = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL",
        minimumFractionDigits:2,
    });
    var valort = valorForm.format(valorTotal);
    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Área do Terreno: "+ areaTotal.toFixed(2) + " M<sup>2</sup> - Valor do Terreno: " + valort;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaislargura(){
 var largura = parseFloat(document.getElementById("txtlargura").value);
 var largurad = document.getElementById("txtlargura");
 largurad.value =largura.toFixed(1)


}
function decimaiscomprimento(){
    var comprimento = parseFloat(document.getElementById("txtcomprimento").value);
    var comprimentod = document.getElementById("txtcomprimento");
    comprimentod.value =comprimento.toFixed(1)
   
   
   }
   function decimaisvalor(){
    var valor = parseFloat(document.getElementById("txtvalor").value);
    var valord = document.getElementById("txtvalor");
    valord.value =valor.toFixed(2)
   
   
   }


