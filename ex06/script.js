

function exercicio1(){
    let nome = document.getElementById("txtnome").value;
    let valor = parseFloat(document.getElementById("txtvalor").value);
    let horas = parseFloat(document.getElementById("txthoras").value);

    let pagamento = (valor * horas);



    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "O pagamento para " + nome + " deve ser " +  pagamento.toFixed(2) ;
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaisvalor(){
 var valor = parseFloat(document.getElementById("txtvalor").value);
 var valord = document.getElementById("txtvalor");
 valord.value =valor.toFixed(2)


}
   
   
   


