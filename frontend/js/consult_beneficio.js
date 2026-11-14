const resposta = document.getElementById("resposta")
const btn = document.getElementById("btn")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const codBeneficio = document.getElementById('codBeneficio').value
    fetch(`http://localhost:3000/beneficio/${codBeneficio}`)
    .then(res=>{
        return res.json()
    })
    .then(dados=>{
        resposta.innerHTML = ''
        resposta.innerHTML += `<table>
        <thead>
        <tr>
            <td>Código</td>
            <td>Nome do Motorista</td>
            <td>Modelo do veículo</td>
            <td>Ajuda de custo fixa</td>
            <td>Pernoites</td>
            <td>Categoria da Rota</td>
            <td>Valor Total</td>
        </tr>
        </thead>
        <tbody>
        
            
                <tr>
                <td>${dados.codBeneficio}</td>
                <td>${dados.nomeMotorista}</td>
                <td>${dados.modeloVeiculo}</td>
                <td>${dados.ajudaCustoFixa}</td>
                <td>${dados.pernoites}</td>
                <td>${dados.categoriaRota}</td>
                <td>${dados.valorTotal}</td>
                </tr>
        </tbody>
        </table>
        `
    })
    .catch((err)=>{
        console.error('Erro ao consultar benefício',err)
        resposta.innerHTML += 'Erro ao consultar benefício'
    })

    form.reset()
})

