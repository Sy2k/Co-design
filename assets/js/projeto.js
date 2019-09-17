document.addEventListener("DOMContentLoaded", function() {
  let params = coDesExtract()
  let value = params["key"]
  let value2 = params["chave"]
  let db = coDesConnect("https://portefeuille-7f9ce.firebaseio.com/")

  db.download("/", function(data) {
    let projeto = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".titulo-projeto", projeto)

    let descricao = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".descricao", descricao)

    let grupo = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".grupo", grupo)

    let habilidade = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".habilidade", habilidade)

    let imagem = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".projeto-item", imagem)

  })
})