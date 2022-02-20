document.addEventListener('DOMContentLoaded', e => {
    window.addEventListener('keydown', e => {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//e.keycode es el codigo de la tecla presionada. 
        //Asi que el queryselector busca el audio correspondiente a la tecla presionada.
        if (audio) {//si la tecla presionada no tiene un audio asosiado no hace nada
            audio.currentTime = 0;//"rebobina" el audio al principio. Esto sirve para no tener que esperar a que el audio termine de
            //ejecutarse para volver a sonar.
            audio.play();//comienza a sonar
            const key = document.querySelector(`div[data-key="${e.keyCode}"]`);//se puede llamar directamente con la clase ('.key')
            key.classList.add('playing');     
        }
    })
    document.querySelectorAll('.key').forEach(element => {//selecciono todas las teclas
        element.addEventListener('transitionend', removeTransition);
    });
    function removeTransition(e) {
        if (e.propertyName='transform'){
            this.classList.remove('playing');
        }
    }

})