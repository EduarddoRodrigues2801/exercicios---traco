

function exercicio1(){
    
   
    let x = parseFloat(document.getElementById("txtx").value);
    let y = parseFloat(document.getElementById("txty").value);
   let contador = x;
    let final = y - x;
    var soma = 0;
    while (contador < y) {
        let impar = (contador % 2);
        if (impar === 1){
            soma = soma + contador;
          //  console.log(contador)
        }
       
        
        contador = contador + 1; 
      }

    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Resultado: " + soma;


}

function novo(){
    document.location.reload(true);

}

