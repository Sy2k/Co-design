document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']

  let db = coDesConnect('https://portefeuille-7f9ce.firebaseio.com/')

  db.download('/', function(data) {

    context = data['biblioteca'][value]
    coDesReplace('title', context)

    context = data
    coDesReplace('.menu-list', context)

    context = data['biblioteca'][value]
    coDesReplace('.call', context)

    context = data['biblioteca'][value]
    coDesReplace('.book-list', context)
  })
})
