<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $descricao = $_POST["descricao"];
    $curriculo = $_POST["curriculo"];

    // Conectar ao banco de dados (substitua pelos seus próprios detalhes de conexão)
    $conn = new mysqli("localhost", "downlo32_bhs", "Bhs@1536", "downlo32_uni");

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Erro de conexão: " . $conn->connect_error);
    }

    // Preparar a instrução SQL para inserção
    $stmt = $conn->prepare("INSERT INTO membros (nome, email, descricao, curriculo) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nome, $email, $descricao, $curriculo);

    // Executar a instrução SQL
    if ($stmt->execute()) {
        echo "Obrigado, $nome! Recebemos seus dados. Em breve entraremos em contato!";
    } else {
        echo "Erro ao enviar dados. Por favor, tente novamente mais tarde.";
    }

    // Fechar a conexão e a instrução SQL
    $stmt->close();
    $conn->close();
}
?>
