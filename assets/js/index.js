document.addEventListener("DOMContentLoaded", function() {
  let db = coDesConnect("https://portefeuille-7f9ce.firebaseio.com/");

  db.download('/', function(data) {
    context = data
    coDesReplace('.categorias-item', context)

    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slider");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  })
})
