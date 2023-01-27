// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Dark Mode Implementation
(function () {
  document.querySelector(".dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

//Read More Button Implementation

function readmoreFunction() {
  var btnText = document.getElementById("read-more");
  var more = document.getElementById("more");

  if (more.style.display != "none") {
    more.style.display = "none";
    btnText.style.display = "none";
    btnText.innerHTML = "... Read Less";
    more.style.display = "inline";
  }
}
