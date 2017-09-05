var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + [i] + ".jpg");
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", function(e){
var imgSrc = e.target.getAttribute("src");
displayedImage.setAttribute("src", imgSrc)
  })
};
/* Wiring up the Darken/Ligrhten button */
var opac = function(){
  if(btn.getAttribute("class") === "dark"){
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}

btn.addEventListener("click", opac);