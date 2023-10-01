function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var curso = document.getElementById('curso').value;
    var matricula = document.getElementById('matricula').value;
    var descricao = document.getElementById('descricao').value;
    var curriculo = document.getElementById('curriculo').value;

    // Validar campos obrigatórios
    if (nome === '' || email === '' || curso === '' || matricula === '' || descricao === '' || curriculo === '') {
        document.getElementById('error-message').textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Aqui você pode usar AJAX para enviar os dados para o servidor e processá-los
    // Após processar os dados no servidor, você pode exibir uma mensagem de sucesso na div "resposta"
    // Exemplo de código AJAX:
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'processar.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('resposta').innerHTML = xhr.responseText;
        }
    };
    xhr.send('nome=' + nome + '&email=' + email + '&curso=' + curso + '&matricula=' + matricula + '&descricao=' + descricao + '&curriculo=' + curriculo);
    

    // Exemplo de mensagem de sucesso (apenas para ilustração)
    document.getElementById('resposta').innerHTML = 'Obrigado, ' + nome + '! Seu formulário foi enviado com sucesso.';
}
