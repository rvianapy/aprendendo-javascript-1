var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    // Seleciona o formulário no codigo HTML
    var form = document.querySelector("#form-adiciona");

    // Seleciona os valores digitados em cada campo do formulário,
    // identificados pelo atributo 'for', e atribui às variaveis
    // respectivas
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Cria a tag <tr> para receber os valores digitados no formulário
    var pacienteTr = document.createElement("tr");

    // Cria as tags <td>
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // Adiciona os dados do formulário nas tags <td> criadas
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    // Adiciona as tags <td> dentro da tag <tr>
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Seleciona a tabela no código HTML
    var tabela = document.querySelector("#tabela-pacientes");

    // Adiciona a <tr> à tabela de pacientes
    tabela.appendChild(pacienteTr);
});
