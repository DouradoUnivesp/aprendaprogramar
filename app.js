function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    console.log(campoPesquisa);

    if (!campoPesquisa) {
      section.innerHTML = "Nada foi encontrado. Insira um pesquisa válida."
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      nome = dado.nome.toLowerCase()
      tags = dado.tags.toLowerCase()
      if (nome.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.cursos}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
      
    }

    if (!resultados) {
      resultados = "Nada foi encontrado"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }