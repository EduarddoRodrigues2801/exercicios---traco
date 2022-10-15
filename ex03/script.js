

function exercicio1(){
    let nome1 = document.getElementById("txtnome1").value;
    let idade1 = parseFloat(document.getElementById("txtidade1").value);
    let nome2 = document.getElementById("txtnome2").value;
    let idade2 = parseFloat(document.getElementById("txtidade2").value);

    let media = (idade1 + idade2)/2
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Nome1: " + nome1+ "<br>Idade1: " + idade1 +"<br>Nome2: " + nome2 + "<br>Idade2: " + idade2 + "<br>A idade média de  "+ nome1 +" e "+ nome2 +" é de "+ media.toFixed(1)+" anos" ;
    
    
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


