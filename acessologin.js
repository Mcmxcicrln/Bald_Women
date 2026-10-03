function validarLogin() {
    // 1. Definimos o login de teste
    const emailCorreto = "teste@email.com";
    const senhaCorreta = "1234";

    // 2. Pegamos os valores que o usuário digitou
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;

    // 3. Verificamos se estão vazios
    if (emailDigitado === "" || senhaDigitada === "") {
        alert("Por favor, preencha os campos!");
        return;
    }

    // 4. Testamos se os dados batem com o login de teste
    if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
        alert("Login correto! Redirecionando...");
        window.location.href = "bemvindo.html"; // Vai para sua página de sucesso
    } else {
        alert("E-mail ou senha inválidos. Tente: teste@email.com / 123456");
    }
}