  document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://portefeuille-7f9ce.firebaseio.com/')

  db.download('/', function(data) {

    context = data['biblioteca'][value]
    coDesReplace('title', context)

    context = data
    coDesReplace('.titulo-categoria', context)

    context = data['biblioteca'][value]
    coDesReplace('.projetos-menu', context)

    context = data['biblioteca'][value]
    coDesReplace('.nome_projeto', context)

    context = data['biblioteca'][value]
    coDesReplace('.texto', context)
  })
})
