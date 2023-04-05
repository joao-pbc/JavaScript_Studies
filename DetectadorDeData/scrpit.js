function carregar(){
    var imagem = window.document.getElementById('img')
    var texto = window.document.getElementById('msg')
    var fundoTxt = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours
    if (hora >= 4 && hora < 12){
        texto.innerText = 'Bom dia!'
        imagem.src="manha.png"
        document.body.style.background= '#ecbe9d'
    } else if(hora >=12 && hora < 18){
        texto.innerText = 'Boa Tarde!'
        imagem.src= "tardesinha.png"
        document.body.style.background= '#f18b1c'
    }else{
        texto.innerText= 'Boa Noite!'
        imagem.src= "Noiteverid.png"
        document.body.style.background= '#03696e'
    }

}
