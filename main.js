const botoes = querySelectorAll(".botao");

for(let i=0; i<botoes.length; i++){
  botoes[i].onclik = function(){
    for (j=0; j<botoes.length; j++){
      botoes[j].classlist.remove("ativo");
    }
    botoes[i].classlist.add("ativo");
  }
}