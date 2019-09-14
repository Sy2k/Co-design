document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://portefeuille-7f9ce.firebaseio.com/')

  let context = {
    'items':{
      'Grupo:':{
        'item1' : 'Ellen Shen',
        'item2' : 'Gabriela Boriero',
        'item3' : 'Stephanie Liu'
      },
      'Descrição:':{
        'item1':'Projeto de Ciência dos Dados'
      },
      'Habilidades:':{
        'item1' : 'Noção de Estatística',
        'item2' : 'Noção de Probabilidade',
        'item3' : 'Biblioteca Pandas do Python'
      },
      'Resources:':{
        'item1' : 'Jupyter',
        'item2' : 'Dados encontrados na internet em sites confiáveis'
    }
  }
  }
  coDesReplace('.dados-projeto', context)
})
