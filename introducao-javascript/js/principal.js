var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdIMC = paciente.querySelector(".info-imc");
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido!";
        // Adiciona paciente a classe CSS paciente-invalido
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida!";
        // Adiciona paciente a classe CSS paciente-invalido
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        // Exibe apenas duas casas decimais no IMC
        tdIMC.textContent = imc.toFixed(2);
    }
}
