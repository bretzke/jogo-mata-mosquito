//alert('teste')

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search //recuperamos o valor da dificuldade
nivel = nivel.replace('?', '')//tiramos o ? da url, ficando só o nível

if(nivel === 'normal') {
	criaMosquitoTempo = 1500

} else if(nivel === 'dificil') {
	criaMosquitoTempo = 1000

} else if(nivel === 'chuck_norris') {
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	tempo -= 1
	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else {
	document.getElementById('cronometro').innerHTML = tempo //vamos pegar o id do span do app.html e colocar o valor da variavel tempo nele
	}
} , 1000)

function posicaoRandomica() {

//remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove()

	if(vidas > 3) {
		window.location.href = 'fim_de_jogo.html'
	} else {
	document.getElementById('v' + vidas).src="img/coracao_vazio.png"

	vidas++
	}	
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

//criando o elemento html

var mosquito = document.createElement('img')
mosquito.src = 'img/mosquito.png'
mosquito.className = tamanhoAlatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
	this.remove()
}

document.body.appendChild(mosquito)
}

function tamanhoAlatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}		
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}