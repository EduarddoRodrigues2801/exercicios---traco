

function exercicio1(){
    
   
    let dia = parseFloat(document.getElementById("txtdia").value);
    let mes = parseFloat(document.getElementById("txtmes").value);

    if((dia >=21 &&  mes === 3  )||(dia <= 20 && mes ==4)){
        var resposta = "O Signo é: Áries"; 
    }else if((dia >=21 && mes ===4)||(dia <= 20 && mes === 5)){
        var resposta = "O Signo é: Touro"; 
    }else if((dia >=21 && mes ===5)||(dia <= 20 && mes === 6)){
        var resposta = "O Signo é: Gêmeos"; 
    }else if((dia >=21 && mes ===6)||(dia <= 22 && mes === 7)){
        var resposta = "O Signo é: Câncer"; 
    }else if((dia >=23 && mes ===7)||(dia <= 22 && mes === 8)){
        var resposta = "O Signo é: Leão"; 
    }else if((dia >=23 && mes ===8)||(dia <= 22 && mes === 9)){
        var resposta = "O Signo é: Virgem"; 
    }else if((dia >=23 && mes ===9)||(dia <= 22 && mes === 10)){
        var resposta = "O Signo é: Libra"; 
    }else if((dia >=23 && mes ===10)||(dia <= 21 && mes === 11)){
        var resposta = "O Signo é: Escorpião"; 
    }else if((dia >=23 && mes ===111)||(dia <= 21 && mes === 12)){
        var resposta = "O Signo é: Sagitário";
    }else if((dia >=22 && mes ===12)||(dia <= 20 && mes === 1)){
        var resposta = "O Signo é: Capricórnio";
    }else if((dia >=21 && mes ===1)||(dia <= 18 && mes === 2)){
        var resposta = "O Signo é: Aquário";
    }else if((dia >=19 && mes ===2)||(dia <= 20 && mes === 3)){
        var resposta = "O Signo é: Peixes";
    }
   let resultado = document.getElementById("conteudoresultado");

    resultado.innerHTML = resposta;


function novo(){
    document.location.reload(true);
}

}