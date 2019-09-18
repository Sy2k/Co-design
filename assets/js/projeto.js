document.addEventListener("DOMContentLoaded", function() {
  let params = coDesExtract()
  let value = params["key"]
  let value2 = params["chave"]
  let db = coDesConnect("https://portefeuille-7f9ce.firebaseio.com/")

  db.download("/", function(data) {
    let titulo = data["portifolio"][value]["projetos"][value2]
    coDesReplace("title", titulo)


    let projeto = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".titulo-projeto", projeto)

    let descricao = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".descricao", descricao)

    let grupo = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".grupo", grupo)

    let habilidade = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".habilidade", habilidade)

    let resources = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".recursos", resources)

    let imagem = data["portifolio"][value]["projetos"][value2]
    coDesReplace(".projeto-item", imagem)

    let load = document.querySelector('.load')
    load.classList.add('hidden')
  
    let test = document.querySelector('.main')
    test.classList.remove('hidden')

  })
})