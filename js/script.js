const splide = new Splide('.splide', { 
    type: 'slide',
    
} );
splide.on( 'overflow', function ( isOverflow ) {
  // Reset the carousel position
  splide.go( 0 );

  splide.options = {
    arrows    : isOverflow,
    pagination: isOverflow,
    drag      : isOverflow,
    clones    : isOverflow ? undefined : 0, // Toggle clones
  };
} );
splide.mount();
function myAbout() {
  var x = document.getElementById("myAbout");
  if (x.className === "fa fa-heart") {
    x.className = "fa fa-heart-o";
  } else {
    x.className = "fa fa-heart";
  }
}
function menuKatalog() {
  var x = document.getElementById("menu");
  var icon = document.getElementById("btn")
  if (x.className === "menu col-lg-3 d-none") {
    x.className = "menu col-lg-3 onPos d-flex";
  } else {
    x.className = "menu col-lg-3 d-none";
  }
  if (icon.className === "iconka") {
    icon.className = "iconka close";
  } else {
    icon.className = "iconka";
  }
}
window.addEventListener("scroll", function(){
  let header = document.getElementById("header");
  let section = document.getElementById("section")
  console.log(header, "aziza");
  header.classList.toggle("sticky", window.scrollY > 55)
  section.classList.toggle("first-m", window.scrollY > 55)
})