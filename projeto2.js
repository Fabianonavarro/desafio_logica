//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
//
//## Saída
//
//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,

//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - de

// Definir variaveis
//let vitorias = 100
let vitorias = prompt("Digite as vitorias:")
//let derrotas = 15
let derrotas = prompt("Digite as derrotas:")
let total = 0

// classes

// TotalVitorias para calcular as vitorias

TotalVitorias (vitorias, derrotas)
function TotalVitorias (){

total = vitorias - derrotas
//console.log(vitorias)
//console.log(derrotas)
//console.log(total)


}

// clasdeVitoria para classificar as vitorias e da o output

clasdeVitoria (TotalVitorias, clasdeVitoria)
function clasdeVitoria (){

    if(total <= 10){
    console.log("O Herói tem saldo de ** " + total + " vitorias ** está no nível de  ** Ferro ** ")
    }else if(total >= 11  && total <= 20){
    console.log("O Herói tem saldo de ** " + total + " vitorias ** está no nível de  ** Bronze **")
    }else if(total >= 21  && total <= 50){
    console.log("O Herói tem saldo de ** " + total + " vitorias ** está no nível ** Prata ** ")
    }else if(total >= 51  && total <= 80){
    console.log("O Herói tem saldo de ** " + total + " vitorias ** está no nível ** Ouro **")
    }else if(total >= 81  && total <= 90){
    console.log("O Herói tem saldo de ** " + total + " vitorias ** está no nível ** Diamante **")
    }else if(total >= 91  && total <= 100){
    console.log("O Herói tem saldo de ** " + total + " vitorias ** está no nível ** Lendario **")
    }else if(total >= 101){
    console.log("O Herói tem saldo de ** " + total + " vitorias ** está no nível ** Imortal **")
    }
}



