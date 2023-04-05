let txtResul = document.getElementById("resul")
let select = document.getElementById("selectNum")
let txtNum = document.getElementById("txtNum")
let array = []

function adicionar(){
    let Num = Number(txtNum.value)
    if(Num >= 1 && Num <= 100 && verificadorLista(Num, array)){
        array.push(Num)
        let item = document.createElement('option')
        item.text = `valor ${Num} adicionado!`
        select.appendChild(item)
        txtNum.value = ''
        txtNum.focus()
        txtResul.innerHTML = ''
    }
    else {
        txtNum.value = ''
        txtNum.focus()
    }
}
function verificadorLista(n, l){
    if(l.indexOf(n) === -1){
        return true
    } else {
        window.alert("Número já existe na lista")
        return false
    }
}
function mostrar(){
    if(array.length == 0){
        window.alert("Insira algo na lista!")
    } else {
        let maior = 0
        let menor = 101
        let soma = 0
        let total = array.length
        for (let i in array){
            soma += array[i]
            if (array[i] > maior){
                maior = array[i]
            }
            if (array[i] < menor){
                menor = array[i]
            }
        }
        txtResul.innerHTML += `<p>A quantidade de números adicionados é ${total}</p>`
        txtResul.innerHTML += `<p>O maior número é ${maior}</p>`
        txtResul.innerHTML += `<p>O menor número é ${menor}</p>`
        txtResul.innerHTML += `<p>A soma é ${soma}</p>`
        txtResul.innerHTML += `<p>A média é ${soma/array.length + 1}</p>`
    }
}