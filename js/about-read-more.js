function about_readMore() {
  var dots = document.getElementById("about-dots");
  var moreText = document.getElementById("about-more");
  var btnText = document.getElementById("about-myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    btnText.classList.add("btn-primary");
    btnText.classList.remove("btn-secondary"); 
    moreText.classList.remove("about-enabled");
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    btnText.classList.add("btn-secondary");
    btnText.classList.remove("btn-primary");
    moreText.classList.add("about-enabled");
  }
}