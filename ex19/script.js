

function exercicio1(){
    
   
    let salario = parseFloat(document.getElementById("txtsalario").value);
    if(salario <= 999){
        var aumento = 0.20;
    }else if(salario <= 2999){
        var aumento = 0.15;
    }else if(salario <= 7999){
        var aumento = 0.10;
    }else{
        var aumento = 0.05;
    }

    var novosal = (salario * aumento )+salario;
    var diferenca = novosal - salario;

    
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Novo Salário: R$ "+ novosal.toFixed(2) + " Aumento = R$ " + diferenca.toFixed(2) + " Porcentagem = " + (aumento * 100) + "%"; 
    
}

function novo(){
    document.location.reload(true);

}

function decimaissalario(){
    var salario = parseFloat(document.getElementById("txtsalario").value);
    var salariod = document.getElementById("txtsalario");
  salariod.value =salario.toFixed(2)
      
   }
