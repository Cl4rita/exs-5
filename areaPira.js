let resposta = document.getElementById('resposta')
console.log(resposta);

function calcula(){
    let lados = Number(document.getElementById('lados').value)
    console.log(lados)
    let bases = Number(document.getElementById('bases').value)
    console.log(bases)

    let area = bases + lados
    console.log("O valor da área é = ",area)

    resposta.innerHTML = "O valor da área é = " + area.toFixed(2) + "cm²"
    resposta.style.color = "rgb(151, 6, 74)"
    resposta.style.fontWeight = "lightbold"
}