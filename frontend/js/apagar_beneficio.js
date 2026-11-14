const resposta = document.getElementById("resposta")
const btn = document.getElementById("btn")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const codBeneficio = document.getElementById('codBeneficio').value

    fetch(`http://localhost:3000/beneficio/${codBeneficio}`, {
        method: "DELETE",
    })
    .then(res=>{
        return res.json()
    })
    .then(dados=>{
        resposta.innerHTML = ''
        resposta.innerHTML += dados.message
    })
    .catch((err)=>{
        console.error('Erro ao apagar benefício',err)
        resposta.innerHTML += 'Erro ao apagar benefício'
    })
    form.reset()
})