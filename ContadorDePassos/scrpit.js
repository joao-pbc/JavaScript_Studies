var minimo = document.getElementById('numMinimo')
var passo = document.getElementById('numPasso')
var final = document.getElementById('numFinal')
var contagem = document.getElementById('contagem')
function contar(){
    if( minimo.value.lenght == 0 || final.value.lenght == 0 || passo.value.lenght == 0){
            window.alert("[ERRO], faltam dados!")
    }else{
        let min = Number(minimo.value)
        let fin = Number(final.value)
        let pas = Number(passo.value)
        if (pas <= 0){
            window.alert("Passo inválido!, considerando passo 1")
            pas = 1
        }
        if(min < fin){
            contagem.innerText = ""
            for(i = min; i<=fin; i += pas){
                contagem.innerText += `${i} \u{1F449}`
            }
        } else {
            contagem.innerText = ""
            for(i = min; i>=fin; i -= pas){
                contagem.innerText += `${i} \u{1F449}`
            }
        }
    }
    contagem.innerText += `\u{1F3C1}`
}
