let peso = 80;
let altura = 1.8;

let imc = peso / (altura * altura);

if(imc <= 18.5){
    alert("abaixo do peso");
}else if(imc <= 24.9){
    alert("peso normal");
}else if(imc <= 29.9){
    alert("sobrepeso");
}else if(imc <= 34.9){
    alert("obesidade grau I");
}else if(imc <= 39.9){
    alert("obesidade grau II");
}else{
    alert("obesidade grau III");
}