document.addEventListener("DOMContentLoaded", function() {
    var reviews = document.querySelectorAll(".review");
    var currentIndex = 0;
  
    function showReview(index) {
      for (var i = 0; i < reviews.length; i++) {
        reviews[i].classList.remove("animate");
      }
      reviews[index].classList.add("animate");
    }
  
    function goToPreviousReview() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = reviews.length - 1;
      }
      showReview(currentIndex);
    }
  
    function goToNextReview() {
      if (currentIndex < reviews.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      showReview(currentIndex);
    }
  
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");
  
    prevButton.addEventListener("click", goToPreviousReview);
    nextButton.addEventListener("click", goToNextReview);
  
    showReview(currentIndex);
  });