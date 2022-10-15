

function exercicio1(){
    
   
    let x = parseFloat(document.getElementById("txtx").value);
   let lista = document.createElement('ul');


for (i =1 ; i <= x ; i++){
    let item = document.createElement('li');
  
   

    if(i % 2 === 0){
        var valor = i;
        let conteudo = document.createTextNode(valor);    
    item.appendChild(conteudo)
    lista.appendChild(item)
    }
}
 let resultado = document.getElementById("conteudoresultado");
    //resultado.innerHTML = "Resultado: "+soma ;
    resultado.appendChild(lista);
    
 
    //resultado.innerHTML = tipo;

}

function novo(){
    document.location.reload(true);

}

