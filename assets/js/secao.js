document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://portefeuille-7f9ce.firebaseio.com/')

  db.download('/', function(data) {
    let context = data['portifolio'][value]
    coDesReplace('title', context)
    coDesReplace('.titulo-categoria', context)
    
    
    // let context = data['portifolio'][value]
    // let title = context['categoria']
    // coDesReplace('title', title)
    // coDesReplace('.titulo-categoria', title)

    let menu = data['portifolio'][value]
    coDesReplace('.projetos-menu', menu)

    let nome = data['portifolio'][value]
    coDesReplace('.nome_projeto', nome)

    let text = data['portifolio'][value]
    coDesReplace('.texto', text)
  })
})