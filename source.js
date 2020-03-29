var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.progress'),
  scroll;

document.addEventListener('scroll', function() {
  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
