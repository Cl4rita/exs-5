let resposta = document.getElementById('resposta')
console.log(resposta);

function calcula(){
    let tempC = Number(document.getElementById('tempC').value)
    let tempF = Number(document.getElementById('tempF').value)
    console.log(tempC)
    console.log(tempF)

    let conversao = (tempC * 1.8) + 32
    console.log("Em °F fica = " + conversao + "°F")
    let conversao2 = (tempC - 32) / 1.8
    console.log("Em °C fica = " + conversao2 + "°C")

    resposta.innerHTML = "Em °F fica = " + conversao.toFixed(1) + "°F"
    resposta2.innerHTML = "Em °C fica = " + conversao2.toFixed(1) + "°C"

    resposta.style.color = "rgb(151, 6, 74)"
    resposta.style.fontWeight = "lightbold"
    resposta2.style.color = "rgb(151, 6, 74)"
    resposta2.style.fontWeight = "lightbold"
}