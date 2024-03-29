document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = params["chave"]
  let db = coDesConnect('https://portefeuille-7f9ce.firebaseio.com/')




  db.download('/', function(data) {
    let titulo = data['portifolio'][value]
    coDesReplace('title', titulo)

    let context = data['portifolio'][value]
    coDesReplace('.titulo-categoria', context)

    let menu = data['portifolio'][value]
    menu['catid'] = value
    coDesReplace('.projetos-menu', menu)

    let nome = data['portifolio'][value]
    coDesReplace('.nome_projeto', nome)

    let text = data['portifolio'][value]
    coDesReplace('.texto', text)

    let load = document.querySelector('.load')
    load.classList.add('hidden')
  
    let test = document.querySelector('.main')
    test.classList.remove('hidden') 
  })

})