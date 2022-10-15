

function exercicio1(){
    let altura = parseFloat(document.getElementById("txtaltura").value);
    let base = parseFloat(document.getElementById("txtbase").value);


    let areaTotal = (altura * base);
    let p = 2*(altura + base);
    let diagonal = (altura*altura)+(base*base) ;
    let raizdiagonal = Math.sqrt(diagonal)
    
    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Área do Retângulo: "+ areaTotal.toFixed(4) + " - Perímetro: "+ p.toFixed(4) +" Diagonal: " + raizdiagonal.toFixed(4);
    
    
}

function novo(){
    document.location.reload(true);

}
function decimaisbase(){
    var base = parseFloat(document.getElementById("txtbase").value);
    var based = document.getElementById("txtbase");
    based.value =base.toFixed(1)
   
   
   }
   function decimaisaltura(){
       var altura = parseFloat(document.getElementById("txtaltura").value);
       var alturad = document.getElementById("txtaltura");
       alturad.value =altura.toFixed(1)
      
      
      }
      function decimaisvalor(){
       var valor = parseFloat(document.getElementById("txtvalor").value);
       var valord = document.getElementById("txtvalor");
       valord.value =valor.toFixed(2)
      
      
      }

