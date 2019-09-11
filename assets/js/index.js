document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://portefeuille-7f9ce.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.menu-list', context)
    coDesReplace('.section-list', context)
  })
})
