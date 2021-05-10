// fazer botão enter calcular

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#btn");
    
    btn.click();
  
  }
});

// cálculo do IMC e resultado

function Calcular() {

    var peso = document.getElementById("pesoid").value;
    var altura = document.getElementById("alturaid").value;
    peso = parseFloat(peso.replace(',','.'));
    altura = parseFloat(altura.replace(',','.'));
    var altura2 = altura*altura;
    altura2 = parseFloat(altura2);
    var imc = peso/altura2;
    imc = imc.toFixed(1);
	
	if (document.getElementById("pesoid").value=="" || document.getElementById("alturaid").value=="") {
		alert('Por favor, preencha ambos os campos. Esta é uma calculadora, não uma vidente.')
	}
		else {
		document.getElementById("fim").innerHTML = "Esta ferramenta é apenas para referência. O IMC, isoladamente, não reflete a condição física do indíviduo e representa um método antigo de apuração da massa corporal. Em caso de dúvida, busque auxílio de um profissional."
	} 

	/* if (document.getElementById("pesoid").value=="" && document.getElementById("alturaid").value=="") {
		alert('Por favor, preencha o seu peso e a sua altura. Esta é uma calculadora, não uma vidente!')
    }
	
	else if (document.getElementById("pesoid").value=="") {
		alert('Por favor, preencha o seu peso. Esta é uma calculadora, não uma vidente!')
    }
	
	else if (document.getElementById("alturaid").value=="") {
		alert('Por favor, preencha a sua altura. Esta é uma calculadora, não uma vidente!')
    }
	
	else {
		document.getElementById("fim").innerHTML = "Esta ferramenta é apenas para referência. O IMC, isoladamente, não reflete a condição física do indíviduo e representa um método antigo de apuração da massa corporal. Em caso de dúvida, busque auxílio de um profissional."
	} 
	
	*/
    
    if (imc < 18.5) {
    document.getElementById("imcresult").innerHTML = 'Seu IMC é de ' + imc +'. Este valor é considerado ABAIXO DO PESO, então vá comer uma rosquinha!'
    }
    
   else if (imc >= 18.5 && imc <= 24.9) {
     document.getElementById("imcresult").innerHTML = 'Seu IMC é de ' + imc +'. Este valor é considerado PESO NORMAL. Continue assim!'
    }
    
    else if (imc >= 25 && imc <= 29.9) {
     document.getElementById("imcresult").innerHTML = 'Seu IMC é de ' + imc +'. Este valor é considerado SOBREPESO. É importante prestar atenção na sua alimentação e manter hábitos saudáveis.'
    }
    
    else if (imc >= 30 && imc <= 34.9) {
     document.getElementById("imcresult").innerHTML = 'Seu IMC é de ' + imc +'. Este valor é considerado OBESIDADE (Grau I). A obesidade pode apresentar fator de risco.'
    }
    
    else if (imc >= 35 && imc <= 39.9) {
     document.getElementById("imcresult").innerHTML ='Seu IMC é de ' + imc +'. Este valor é considerado OBESIDADE SEVERA (Grau II). Não deixe de avaliar sua saúde em conjunto com um médico de sua confiança.'
    }

    else if (imc >= 40) {
     document.getElementById("imcresult").innerHTML = 'Seu IMC é de ' + imc +'. Este valor é considerado OBESIDADE MÓRBIDA (Grau III). Não deixe de avaliar sua saúde em conjunto com um médico de sua confiança.'
    }
}