let SaldoVitorias = Calculadora(95,2)
let nivel = NivelRank(SaldoVitorias)

console.log("O herói tem o saldo de " + SaldoVitorias + " esta no nivel de " + nivel)


function Calculadora(vitorias, derrotas){
    resultado = vitorias - derrotas
    return resultado

}

function NivelRank(SaldoVitorias){
    if(SaldoVitorias < 10){
        rank = "Ferro"
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