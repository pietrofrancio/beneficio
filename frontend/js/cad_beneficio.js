const resposta = document.getElementById("resposta")
const btn = document.getElementById("btn")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const nomeMotorista = document.getElementById("nomeMotorista").value
    const modeloVeiculo = document.getElementById("modeloVeiculo").value
    const ajudaCustoFixa = document.getElementById("ajudaCustoFixa").value
    const pernoites = document.getElementById("pernoites").value
    const categoriaRota = document.getElementById("categoriaRota").value

    const valores = {
        nomeMotorista: nomeMotorista,
        modeloVeiculo: modeloVeiculo,
        ajudaCustoFixa: ajudaCustoFixa,
        pernoites: pernoites,
        categoriaRota: categoriaRota
    }

    fetch("http://localhost:3000/beneficio", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(valores)
    })
    .then(res=>{
        return res.json()
    })
    .then(dados=>{
        resposta.innerHTML = ''
        resposta.innerHTML += dados.message
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar benefício',err)
        resposta.innerHTML += 'Erro ao cadastrar benefício'
    })
    form.reset()
})