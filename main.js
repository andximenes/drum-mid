function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
 
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento não encontrado'); 
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const pegaOSomDaTecla = tecla.classList[1];
    const idAudio = `#som_${pegaOSomDaTecla}`; //template string

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
            
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}