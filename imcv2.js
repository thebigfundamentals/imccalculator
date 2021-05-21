function calcImc() {

    var peso = document.getElementById("pesoimc").value;
    var altura = document.getElementById("alturaimc").value;
    peso = parseFloat(peso.replace(',', '.'));
    altura = parseFloat(altura.replace(',', '.'));
    var altura2 = altura * altura;
    altura2 = parseFloat(altura2);
    var imc = peso / altura2;
    imc = imc.toFixed(1);

    if (document.getElementById("pesoimc").value == "" || document.getElementById("alturaimc").value == "") {
        alert('Por favor, preencha ambos os campos.')
    }

    if (imc < 18.5) {
        document.getElementById("resultadoimc").innerHTML = 'Seu IMC é de ' + imc + '. Este valor é considerado ABAIXO DO PESO.'
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("resultadoimc").innerHTML = 'Seu IMC é de ' + imc + '. Este valor é considerado PESO NORMAL.'
    }

    else if (imc >= 25 && imc <= 29.9) {
        document.getElementById("resultadoimc").innerHTML = 'Seu IMC é de ' + imc + '. Este valor é considerado SOBREPESO.'
    }

    else if (imc >= 30 && imc <= 34.9) {
        document.getElementById("resultadoimc").innerHTML = 'Seu IMC é de ' + imc + '. Este valor é considerado OBESIDADE (Grau I).'
    }

    else if (imc >= 35 && imc <= 39.9) {
        document.getElementById("resultadoimc").innerHTML = 'Seu IMC é de ' + imc + '. Este valor é considerado OBESIDADE SEVERA (Grau II).'
    }

    else if (imc >= 40) {
        document.getElementById("resultadoimc").innerHTML = 'Seu IMC é de ' + imc + '. Este valor é considerado OBESIDADE MÓRBIDA (Grau III).'
    }
};

function calcIac() {

    var circQuadril = document.getElementById("circiac").value;
    var altura = document.getElementById("alturaiac").value;
    circQuadril = parseFloat(circQuadril.replace(',', '.'));
    altura = parseFloat(altura.replace(',', '.'));
    var alturaSq = Math.sqrt(altura);
    alturaSq = parseFloat(alturaSq);
    var iac = circQuadril / (altura * alturaSq) - 18;
    iac = iac.toFixed(1);
    let sexo = document.getElementById("sexoiac").value;

    if (document.getElementById("circiac").value === "" || document.getElementById("alturaiac").value === "" || document.getElementById("sexoiac").value === "indef") {
        alert('Por favor, preencha todos os campos.')

    }

    else {
        if (sexo === "M") {

            if (iac <= 20.9) {
                document.getElementById("resultadoiac").innerHTML = `Seu IAC é de ${iac}%, considerado NORMAL.`
            }

            else if (iac > 20.9 && iac <= 25) {
                document.getElementById("resultadoiac").innerHTML = `Seu IAC é de ${iac}%, considerado SOBREPESO.`
            }

            else if (iac > 25) {
                document.getElementById("resultadoiac").innerHTML = `Seu IAC é de ${iac}%, considerado OBESIDADE.`
            }

        }

        else if (sexo === "F") {

            if (iac <= 32.9) {
                document.getElementById("resultadoiac").innerHTML = `Seu IAC é de ${iac}%, considerado NORMAL.`
            }

            else if (iac > 32.9 && iac <= 38) {
                document.getElementById("resultadoiac").innerHTML = `Seu IAC é de ${iac}%, considerado SOBREPESO.`
            }

            else if (iac > 38) {
                document.getElementById("resultadoiac").innerHTML = `Seu IAC é de ${iac}%, considerado OBESIDADE.`
            }

        }

    }

}