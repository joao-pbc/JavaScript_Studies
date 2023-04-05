var numero = window.document.getElementById("num")
var tabuada = window.document.getElementById("tab")
function multiplicar(){
    var resul
    let num = Number(numero.value)
    if(numero.value.length == 0){
        window.alert("Por favor, escreva um número")
    }else{
        tabuada.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            resul = num * i
            let item = document.createElement('Option')
            item.text = `${num} x ${i} = ${resul}`
            tabuada.appendChild(item)
        }
    }
}