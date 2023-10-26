let SaldoVitorias = Calculadora(102,2)
let nivel = NivelRank(SaldoVitorias)

console.log(SaldoVitorias, nivel)


function Calculadora(vitorias, derrrotas){
    let resultado = vitorias - derrrotas
    return resultado

}

function NivelRank(SaldoVitorias){
    if(SaldoVitorias < 10){
        let rank = "Ferro"
    }else if(SaldoVitorias > 10 && SaldoVitorias < 20){
        rank = "Bronze"
    }else if(SaldoVitorias > 20 && SaldoVitorias < 50){
        rank = "Prata   "
    }else if(SaldoVitorias > 50 && SaldoVitorias < 80){
        rank = "Ouro"
    }else if(SaldoVitorias > 80 && SaldoVitorias < 90){
        rank = "Diamante"
    }else if(SaldoVitorias > 90 && SaldoVitorias < 100){
        rank = "Lendário"
    }else if(SaldoVitorias >= 100){
        rank = "Imortal"
    }
    
    
    return rank

}