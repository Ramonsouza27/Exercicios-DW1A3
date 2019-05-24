function calculo(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso/(altura*altura);
    var pesoideal = 24.9*(altura*altura);

    if(imc>=16 && imc<=16.9){
        alert("Seu imc é:"+imc+".\nVocê está muito abaixo do peso.\nSeu peso ideal é: "+pesoideal);
    }
    if(imc>16.9 && imc<=18.4){
        alert("Seu imc é:"+imc+".\nVocê está abaixo do peso.\nSeu peso ideal é: "+pesoideal);
    }
    if(imc>18.4 && imc<=24.9){
        alert("Seu imc é:"+imc+".\nVocê está com o peso normal.");
    }
    if(imc>24.9 && imc<=29.9){
        alert("Seu imc é:"+imc+".\nVocê está acima do peso.\nSeu peso ideal é: "+pesoideal);
    }
    if(imc>29.9 && imc<=34.9){
        alert("Seu imc é:"+imc+".\nVocê está em obesidade Grau I.\nSeu peso ideal é: "+pesoideal);
    }
    if(imc>34.9 && imc<=40.9){
        alert("Seu imc é:"+imc+".\nVocê está em obesidade Grau II.\nSeu peso ideal é: "+pesoideal);
    }
    if(imc>40){
        alert("Seu imc é:"+imc+".\nVocê está em obesidade Grau III.\nSeu peso ideal é: "+pesoideal);
    }
   
}