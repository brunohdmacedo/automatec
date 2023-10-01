document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var descricao = document.getElementById('descricao').value;
    var curriculo = document.getElementById('curriculo').value;

    // Envia dados para o servidor usando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'processar.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if (xhr.status === 200) {
            var respostaDiv = document.getElementById('resposta');
            respostaDiv.innerHTML = `<p>${xhr.responseText}</p>`;
            respostaDiv.style.backgroundColor = '#4caf50';
            respostaDiv.style.color = 'white';
            respostaDiv.style.padding = '20px';
            respostaDiv.style.borderRadius = '10px';
            respostaDiv.style.marginTop = '20px';
        }
    };
    xhr.send(`nome=${nome}&email=${email}&descricao=${descricao}&curriculo=${curriculo}`);
});
