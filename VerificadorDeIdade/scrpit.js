function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtAno')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente")
    } else{
        var formResul = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formResul[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){

                img.setAttribute('src', 'babyb.png')

            }else if(idade >= 10 && idade < 21){

                img.setAttribute('src', 'jovH.png')

            }else if(idade >= 21 && idade < 50){

                img.setAttribute('src', 'H.png')

            }else{

                img.setAttribute('src', 'idosH.png')

            }
        } else if(formResul[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){

                img.setAttribute('src', 'babyg.png')

            }else if(idade >= 10 && idade < 21){

                img.setAttribute('src', 'jovM.png')

            }else if(idade >= 21 && idade < 50){

                img.setAttribute('src', 'M.png')

            }else{
                
                img.setAttribute('src', 'idosM.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}