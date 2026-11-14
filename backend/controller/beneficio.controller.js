const Beneficio = require("../models/Beneficio")

const cadastrar = async(req, res) => {
    const valores = req.body
    if(!valores.nomeMotorista || !valores.modeloVeiculo || !valores.pernoites || !valores.categoriaRota || !valores.ajudaCustoFixa){
    return res.status(400).json({message: 'Todos os campos são obrigatórios'})
    }
    let valorTotal = 0

    try{
        if (valores.categoriaRota === 'REGIONAL') {
            valorTotal = (valores.pernoites * 45) + (1.08 * valores.ajudaCustoFixa) 
        }else if(valores.categoriaRota === 'INTERSTADUAL'){
            valorTotal = (valores.pernoites * 85) + (1.12 * valores.ajudaCustoFixa)
        }else if(valores.categoriaRota === 'INTERNACIONAL'){
            valorTotal = (valores.pernoites * 130) + (1.16 * valores.ajudaCustoFixa)
        }

        const valores2 = {
            nomeMotorista: valores.nomeMotorista,
            modeloVeiculo: valores.modeloVeiculo,
            ajudaCustoFixa: valores.ajudaCustoFixa,
            pernoites: valores.pernoites,
            categoriaRota: valores.categoriaRota,
            valorTotal: valorTotal
        }
        await Beneficio.create(valores2)
        return res.status(201).json({message: `Benefício cadastrado com sucesso! O valor total do benefício é: R$ ${valorTotal}`})
    }catch(err){
        res.status(500).json({message: 'Erro ao cadastrar benefício',err})
    }
}

const listar = async(req, res) => {
    try{
        const dados = await Beneficio.findAll()
        return res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message: 'Erro ao listar benefícios',err})
    }
}

const consultar = async(req, res) => {
    const id = req.params.id
    try{
        const dado = await Beneficio.findByPk(id)
        if(!dado){
            return res.status(404).json({message: 'Benefício não encontrado'})
        }
        return res.status(200).json(dado)
    }catch(err){
        res.status(500).json({message: 'Erro ao consultar benefício',err})
    }
}

const apagar = async(req, res)=>{
    const id = req.params.id
    try{
        const dado = await Beneficio.findByPk(id)
        if(!dado){
            return res.status(404).json({message: 'Benefício não encontrado'})
        }
        await Beneficio.destroy({where: {codBeneficio: id}})
        return res.status(200).json({message: 'Benefício apagado com sucesso'})
    }catch(err){
        res.status(500).json({message: 'Erro ao apagar benefício',err})
    }
}

module.exports = { cadastrar, listar, consultar, apagar }