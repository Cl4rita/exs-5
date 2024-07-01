let resposta = document.getElementById('resposta')
console.log(resposta);

function calcula(){
    let precoKg = 14.95;
    let tempoPreparo = 15;
    let diasMes = 22;
    console.log(precoKg)
    console.log(tempoPreparo) 
    console.log(diasMes) 

    let pesoMedia = (0.792 * 0.873 * 1.27 * 0.559 * 0.672 * 0.714 * 0.623) / 7;
  
    let prodEm3Horas = (pesoMedia * 4) * 3;

    let receitaPeso = precoKg * prodEm3Horas;

    let prodDias = prodEm3Horas * diasMes;

    let receitaTotal = receitaPeso * diasMes;
  
    console.log("O peso total vendido por mês é de " + prodDias + "kg");
    console.log("A receita no mês foi de " + receitaTotal + "reais");

    resposta.innerHTML = "O peso total vendido por mês é de " + prodDias.toFixed(2) + "kg"
    resposta.style.color = "rgb(151, 6, 74)"
    resposta.style.fontWeight = "lightbold"
    resposta2.innerHTML = "A receita no mês foi de " + receitaTotal.toFixed(2) + " reais"
    resposta2.style.color = "rgb(151, 6, 74)"
    resposta2.style.fontWeight = "lightbold"
}