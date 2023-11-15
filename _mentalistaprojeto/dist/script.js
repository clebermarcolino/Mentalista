var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
var numeroChutes = 0;
var numeroMaximoTentativas = 18;
var chute;

while(chute != numeroSecreto && numeroMaximoTentativas != 0) {
  chute = prompt('Digite um número de 1 a 1000');
  
  if(chute ==  numeroSecreto) {
    alert('Parabéns. Você acertou! O número secreto é ' + numeroSecreto);
    break;
} else if(chute > numeroSecreto) {
  alert('Errou... o número secreto é menor que ' + chute);
} else if(chute < numeroSecreto) {
  alert('Errou... o número secreto é maior que ' + chute);
}
  
  numeroChutes ++;
  numeroMaximoTentativas --;
  
  if(numeroMaximoTentativas >= 1) {
    alert('Você já deu ' + numeroChutes + ' chute(s)\n'
         +  'Você tem mais ' + numeroMaximoTentativas + ' tentativa(s)'); 
    } else {
      alert('O número de tentativas acabou! O número secreto era ' + numeroSecreto);
      break;
    }
}