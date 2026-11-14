const resposta = document.getElementById("resposta")
const btn = document.getElementById("btn")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    

    fetch("http://localhost:3000/beneficio")
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
        
            ${dados.map(beneficio=>{
                return `<tr>
                <td>${beneficio.codBeneficio}</td>
                <td>${beneficio.nomeMotorista}</td>
                <td>${beneficio.modeloVeiculo}</td>
                <td>${beneficio.ajudaCustoFixa}</td>
                <td>${beneficio.pernoites}</td>
                <td>${beneficio.categoriaRota}</td>
                <td>${beneficio.valorTotal}</td>
                </tr>
                `
            }).join('')}
        </tbody>
        </table>
        `
    })
    .catch((err)=>{
        console.error('Erro ao listar benefício',err)
        resposta.innerHTML += 'Erro ao listar benefício'
    })

    form.reset()
})

