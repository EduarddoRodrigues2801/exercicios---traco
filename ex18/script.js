

function exercicio1(){
    
    let escala = document.getElementById("txtescala").value;
    let temperatura = parseFloat(document.getElementById("txttemperatura").value);

    var CF = (temperatura * 1.8) + 32;
    var FC = ((temperatura - 32)/9) *5

    if(escala == "C"){
        var resposta = "A temperatura em Fahrenheit: " + CF.toFixed(2)
    }else if(escala == "F"){
        var resposta = "A temperatura em Celsius: " + FC.toFixed(2)
    }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = resposta; 
    
}

function novo(){
    document.location.reload(true);

}

function decimaistemperatura(){
    var temperatura = parseFloat(document.getElementById("txttemperatura").value);
    var temperaturad = document.getElementById("txttemperatura");
  temperaturad.value =temperatura.toFixed(2)
      
   }
