

function exercicio1(){
    
   
    let x = parseFloat(document.getElementById("txtx").value);
   let lista = document.createElement('ul');


for (i =1 ; i <= 10 ; i++){
    let result = i * x
    let item = document.createElement('li');
   
    let conteudo = document.createTextNode(i +" X "+ x+"=" + result);    
    item.appendChild(conteudo)
    lista.appendChild(item)

}
 let resultado = document.getElementById("conteudoresultado");

    resultado.appendChild(lista);
    
 
   

}

function novo(){
    document.location.reload(true);

}

