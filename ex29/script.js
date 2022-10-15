



  
          
function exercicio1(){
    let cnpj1 = document.getElementById("txtcnpj").value;
    var resposta = false;
    cnpj = cnpj1.replace(/[^\d]+/g,'');
   
    
    if(cnpj == '') {
        resposta = "CNPJ: "+ cnpj1 +"  INVÁLIDO";
    };
     
    if (cnpj.length != 14){
        resposta = "CNPJ: "+ cnpj1 +"  INVÁLIDO";
    }

     // Elimina CNPJs invalidos conhecidos
     if (cnpj == "00000000000000" || 
     cnpj == "11111111111111" || 
     cnpj == "22222222222222" || 
     cnpj == "33333333333333" || 
     cnpj == "44444444444444" || 
     cnpj == "55555555555555" || 
     cnpj == "66666666666666" || 
     cnpj == "77777777777777" || 
     cnpj == "88888888888888" || 
     cnpj == "99999999999999"){
        resposta = "CNPJ: "+ cnpj1 +"  INVÁLIDO";
     }

      // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
        resposta = "CNPJ: "+ cnpj1 +"  INVÁLIDO";
    }
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
        resposta = "CNPJ: "+ cnpj1 +"  INVÁLIDO";
    } else{
        resposta = "CNPJ: "+ cnpj1 +"  VÁLIDO";
    }


    
       

    let resultado1 = document.getElementById("conteudoresultado");
   resultado1.innerHTML = resposta;

}

function novo(){
    document.location.reload(true);
}

