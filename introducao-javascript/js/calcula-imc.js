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
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdIMC.textContent = "Peso inválido!";
        // Adiciona paciente a classe CSS paciente-invalido
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdIMC.textContent = "Altura inválida!";
        // Adiciona paciente a classe CSS paciente-invalido
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        // Exibe apenas duas casas decimais no IMC
        tdIMC.textContent = imc;
    }

    function calculaImc(peso, altura) {
        var imc = 0;

        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    function validaPeso(peso) {
        if (peso > 0 && peso < 1000) {
            return true;
        } else {
            return false;
        }
    }

    function validaAltura(altura) {
        if (altura > 0 && altura < 3.0) {
            return true;
        } else {
            return false;
        }
    }
}
