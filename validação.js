

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contatoForm');

    form.addEventListener('submit', function(event) {
        var nome = form.querySelector('input[name="name"]').value.trim();
        var email = form.querySelector('input[name="e-mail"]').value.trim();
        var mensagem = form.querySelector('textarea[name="message"]').value.trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome === '') {
            alert('Por favor, preencha o campo de nome.');
            event.preventDefault();
        } else if (email === '') {
            alert('Por favor, preencha o campo de e-mail.');
            event.preventDefault();
        } else if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            event.preventDefault();
        } else if (mensagem === '') {
            alert('Por favor, preencha o campo de mensagem.');
            event.preventDefault();
        }
    });
});
