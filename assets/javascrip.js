document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento ao botão de envio para mostrar uma mensagem
    const formButton = document.querySelector('form button');
    formButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Obrigado por entrar em contato!');
    });
});
