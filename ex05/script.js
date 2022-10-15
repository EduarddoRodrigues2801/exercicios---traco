

function exercicio1(){
    let raio = parseFloat(document.getElementById("txtraio").value);
   const pi = 3.14159
    

    let area = (2* pi)*raio;
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Área = : " + area.toFixed(3) ;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisraio(){
 var raio = parseFloat(document.getElementById("txtraio").value);
 var raiod = document.getElementById("txtraio");
 raiod.value =raio.toFixed(1)


}
   
   
   


