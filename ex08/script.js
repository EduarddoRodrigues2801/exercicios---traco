

function exercicio1(){
    
    let meda = parseFloat(document.getElementById("txtmeda").value);
    let medb = parseFloat(document.getElementById("txtmedb").value);
    let medc = parseFloat(document.getElementById("txtmedc").value);

    let quadrado  = (meda * meda)
    let triangulo = (medb * meda)/2
    let trapezio = ((meda + medb)*medc)/2

    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = "Área do Quadrado " + quadrado.toFixed(4) + "Área do  Triangulo " + triangulo.toFixed(4) + "Área do Trapézio " + trapezio.toFixed(4);
    
    
}

function novo(){
    document.location.reload(true);

}

function decimaismeda(){
 var medidaa = parseFloat(document.getElementById("txtmeda").value);
 var medidaad = document.getElementById("txtmeda");
 medidaad.value =medidaa.toFixed(1)
 
}

function decimaismedb(){
    var medidb = parseFloat(document.getElementById("txtmedb").value);
    var medidbd = document.getElementById("txtmedb");
    medidbd.value =medidb.toFixed(1)
    
   }
   function decimaismedc(){
    var medidc = parseFloat(document.getElementById("txtmedc").value);
    var medidcd = document.getElementById("txtmedc");
    medidcd.value =medidc.toFixed(1)
    
   }
   
   
   


