

function exercicio1(){
    
    let tempo = parseFloat(document.getElementById("txttempo").value);
    let qtdSegundos = parseInt(tempo);
    let qtdHoras = parseInt(qtdSegundos / 3600)
    qtdSegundos = qtdSegundos % 3600;
    let qtdMinutos = parseInt(qtdSegundos /60);
    qtdSegundos = qtdSegundos % 60
    


    
 
    let resultado = document.getElementById("conteudoresultado");
    resultado.innerHTML = qtdHoras +" : "+ qtdMinutos + " : "+ qtdSegundos;
    
    
}

function novo(){
    document.location.reload(true);

}


