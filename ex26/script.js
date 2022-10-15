function exercicio1(){
    let texto = document.getElementById("txttexto").value;
    let = tamanho = texto.length;
    let = vogais = ["a", "e", "i", "o", "u"];
    let = qtdVogais = 0;
    let = qtdConso = 0;
    
    for (i = 0; i < tamanho; i++) {
        let letra = texto.slice(i, i+1);
        if(vogais.includes(letra)) {
            qtdVogais++;
        }else{
            qtdConso++;
        }
    }
  
    let result = "Vogais: " + qtdVogais + "<br>Consoantes: "+ qtdConso;
    document.getElementById("resultado").innerHTML = result;

}

function novo(){
    document.location.reload(true);
}

