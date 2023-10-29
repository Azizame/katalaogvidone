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