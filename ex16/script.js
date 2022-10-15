

function exercicio1(){
    
    let primeiro = parseFloat(document.getElementById("txtprimeiro").value);
    let segundo = parseFloat(document.getElementById("txtsegundo").value);
    let terceiro = parseFloat(document.getElementById("txtterceiro").value);
    

if (primeiro => segundo && primeiro <= terceiro){
   var maior = primeiro;

}else if(segundo => primeiro && segundo <= terceiro){
    var maior = segundo;
}else{
    var maior = terceiro;
}
    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Primeiro Valor: "+ primeiro + " Segundo valor: " + segundo +" Terceiro valor: " + terceiro +"<br> O maior é " + maior;
    
    
}

function novo(){
    document.location.reload(true);

}