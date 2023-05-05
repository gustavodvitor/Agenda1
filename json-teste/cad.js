
      const campoNome = document.querySelector(".nome");
      const campoIdade = document.querySelector(".idade");
      const campoSexo = document.querySelector(".sexo");
      const botaoEnviar = document.querySelector(".enviar");
      const formulario = document.querySelector(".form");
      const botaoVerCadastroCadastro = document.querySelector(".botaoVerCadastroCadastro");

      let dados = [];


      function salvarJSON(event) {
        event.preventDefault();
        const pessoa = {
          nome: campoNome.value,
          idade: campoIdade.value,
          sexo: campoSexo.value,
        };

        dados.push(pessoa);

        
        botaoVerCadastroCadastro.addEventListener("click", trasnferirDados);
        
        formulario.reset();
      }
      botaoEnviar.addEventListener("click", salvarJSON);

      function trasnferirDados() {
        const listaJSON = JSON.stringify(dados);
        localStorage.setItem("cadastros", listaJSON);
      }

  
