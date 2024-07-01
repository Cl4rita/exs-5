let resposta = document.getElementById('resposta')
console.log(resposta);

function calcula(){
    let raio = 2.5;
    let altura = 22;
    let frascoHora = 55;
    let horasDia = 16;
    let mes = 30; 
    let turno = 2;
    console.log(raio)
    console.log(altura) 
    console.log(frascoHora) 
    console.log(horasDia) 
    console.log(mes) 
    console.log(turno) 

    let volCilindro = Math.PI * raio * raio * altura;
  
    let volProdHora = frascoHora * volCilindro;

    let volProdDia = volProdHora * horasDia;
  
    let volProdMes = volProdDia * mes * turno;
  
    console.log("O volume de produção de detergente no mês:" + volProdMes + "cm³");

    resposta.innerHTML = "O volume de produção de detergente no mês = " + volProdMes.toFixed(2) + "cm³"
    resposta.style.color = "rgb(151, 6, 74)"
    resposta.style.fontWeight = "lightbold"
}