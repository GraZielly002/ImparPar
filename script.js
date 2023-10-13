
var resultado = document.getElementById('resultado');
var imagemButton = document.getElementById('imgb');

    function mostrar() {
        var numeroInput = document.getElementById('num');

        if (resultado.textContent) {
            resultado.textContent = '';
            numeroInput.value = '';
            imagemButton.src = './img/alavanca_cima.svg';
        } else {
            var numero = Number(numeroInput.value);
            if (numero % 2 == 0) {
                resultado.textContent = 'Par';
            } else {
                resultado.textContent = 'Ímpar';
            }
            imagemButton.src = './img/alavanca_baixo.svg';
        }
    }