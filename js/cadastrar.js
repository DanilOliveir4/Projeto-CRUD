document.querySelector("#botao-cadastrar").addEventListener("click", () => {


    const form = document.querySelector("form")
  
    const tarefa ={
      titulo : form.titulo.value,
      descricao : form.descricao.value,
      pontos : form.pontos.value
    }
  
    validar(tarefa)
    console.log(titulo, descricao, pontos);
  })
  
  function validar(tarefa) {
      limparErros();
    if (tarefa.titulo == "") {
      document.querySelector("#titulo").classList.add("is-error")
      document.querySelector("#titulo-error").innerText = "O título é obrigatório"
    }
    if (tarefa.descricao == "") {
      document.querySelector("#descricao").classList.add("is-error")
      document.querySelector("#descricao-error").innerText = "A descricao é obrigatória"
    }
   }
  
   function limparErros() {
      document.querySelector("#titulo").classList.remove("is-error")
      document.querySelector("#titulo-error").innerText = ""
   }