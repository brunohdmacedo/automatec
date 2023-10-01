<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $descricao = $_POST["descricao"];
    $curriculo = $_POST["curriculo"];

    // Construir o corpo do e-mail
    $assunto = 'Novo Cadastro de Membro';
    $mensagem = "Nome: $nome\n";
    $mensagem .= "E-mail: $email\n";
    $mensagem .= "Descrição: $descricao\n";
    $mensagem .= "Currículo: $curriculo\n";

    // Endereço de e-mail para onde os dados serão enviados
    $destinatario = 'bruno@brunohdmacedo.engineer';

    // Enviar e-mail
    $headers = 'From: webmaster@example.com'; // Substitua pelo seu endereço de e-mail
    if(mail($destinatario, $assunto, $mensagem, $headers)) {
        echo "Obrigado, $nome! Seu formulário foi enviado com sucesso.";
    } else {
        echo "Erro ao enviar o formulário. Por favor, tente novamente mais tarde.";
    }
}
?>
