function exercicio1(){
    
    let numero = document.getElementById("txtnumero").value;
    let result = "";

if(numero <= 19) 
   result = getUnidade(numero)
else
	result = getDecimal(numero) + getUnidade(numero);

function getDecimal(nr) {
	let un = nr.toString()
	let inicio = un.slice(0,1)
    switch(inicio) {
      case "1":
        dezena = "dez";
        break;
      case "2":
        dezena = "vinte";
        break;
      case "3":
        dezena = "trinta";
        break;
      case "4":
        dezena = "quarenta";
        break; 
      case "5":
        dezena = "cinquenta";
        break;         
        case "6":
        dezena = "sessenta";
        break;  
        case "7":
        dezena = "setenta";
        break;
        case "8":
        dezena = "oitenta";
        break;         
        case "9":
        dezena = "noventa";
        break;                                  
        default:
        dezena = "dezena inválido";
    }
    return dezena
}

function getUnidade(nr) {

  let e =""
  if(nr > 19) {
  	let unid = numero.toString().slice(1,2);
    let intUnid = parseInt(unid, 10);  
  
    e = (intUnid === 0) ? " " : "e ";
    nr = intUnid
  } 

  switch(nr) {
    case 0:
      unid = "zero";
      break;    
    case 1:
      unid = "um";
      break;
    case 2:
      unid = "dois";
      break;
    case 3:
      unid = "três";
      break;  
    case 4:
      unid = "quatro";
      break;  
    case 5:
      unid = "cinco";
      break;  
    case 6:
      unid = "seis";
      break;  
    case 7:
      unid = "sete";
      break;  
    case 8:
      unid = "oito";
      break;    
    case 9:
      unid = "nove";
      break;   
    case 10:
      unid = "dez";   
      break;
     case 11:
      unid = "onze";
      break;
    case 12:
      unid = "doze"
      break;
    case 13:
      unid = "treze"
      break;
    case 14:
      unid = "quatorze"
      break;
    case 15:
      unid = "quinze"
      break;
    case 16:
      unid = "dezesseis"
      break;
    case 17:
      unid = "dezessete"
      break;
    case 18:
      unid = "dezoito"
      break;
    case 19:
      unid = "dezenove"
      break;
    default:
      unid ="unidade inválido "+ nr;
  }
  if(numero > 0) 
      unid = unid.replace('zero','')

  return " "+ e + unid
}

document.getElementById("resultado").innerHTML = result;
}
function novo(){
    document.location.reload(true);
}

