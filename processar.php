<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $descricao = $_POST["descricao"];
    $curriculo = $_POST["curriculo"];

    // Formatar os dados como uma linha CSV
    $linha_csv = "$nome, $email, $descricao, $curriculo\n";

    // Salvar os dados em um arquivo CSV
    file_put_contents("dados.csv", $linha_csv, FILE_APPEND);

    // Resposta para o cliente (pode ser usada para exibir uma mensagem na página)
    echo "Obrigado, $nome! Recebemos seus dados. Em breve entraremos em contato!";
}
?>
