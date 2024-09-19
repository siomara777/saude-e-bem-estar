function calcularIMC() {
    // Obter valores dos campos de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    // Calcular IMC
    const imc = peso / (altura * altura);

    // Determinar a categoria do IMC
    let mensagem = '';
    if (imc < 18.5) {
        mensagem = 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        mensagem = 'Sobrepeso';
    } else {
        mensagem = 'Obesidade';
    }

    // Exibir resultado
    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)}: ${mensagem}`;
}
