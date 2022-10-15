

function exercicio1(){
    
   
    let v1 = parseFloat(document.getElementById("txtv1").value);
    let v2 = parseFloat(document.getElementById("txtv2").value);
    let v3 = parseFloat(document.getElementById("txtv3").value);
    let v4 = parseFloat(document.getElementById("txtv4").value);
    let v5 = parseFloat(document.getElementById("txtv5").value);
   let arr = [v1,v2,v3,v4,v5];
  
   arr.sort();

   let  valores =    arr.sort();
   let u = valores.length -1
   let p = valores.length -5
   let ult = valores[u];
   let pri = valores[p]

   let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Menor valor é:" +pri + " Maior valor: "+ ult;


function novo(){
    document.location.reload(true);
}

}