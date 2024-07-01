let resposta = document.getElementById('resposta')
console.log(resposta);

function calcula(){
    let altura = Number(document.getElementById('altura').value)
    console.log(altura)
    let base = Number(document.getElementById('base').value)
    console.log(base)

    let area = (base * altura) / 2
    console.log("O valor da área é = ",area)

    resposta.innerHTML = "O valor da área é = " + area.toFixed(2) + "cm²"
    resposta.style.color = "rgb(151, 6, 74)"
    resposta.style.fontWeight = "lightbold"
}