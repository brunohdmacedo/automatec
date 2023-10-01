document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    // Simulando envio de dados para o servidor usando AJAX
    setTimeout(function () {
        var respostaDiv = document.getElementById('resposta');
        respostaDiv.innerHTML = `<p>Obrigado, ${nome}! Recebemos seu e-mail (${email}). Em breve entraremos em contato!</p>`;
        respostaDiv.style.backgroundColor = '#4caf50';
        respostaDiv.style.color = 'white';
        respostaDiv.style.padding = '20px';
        respostaDiv.style.borderRadius = '10px';
        respostaDiv.style.marginTop = '20px';
    }, 1500);
});
