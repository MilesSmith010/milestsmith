var links = [
    "https://galleria.io/wp-content/themes/galleria/dist/images/demo/4m.jpg",
  "https://images.freeimages.com/images/large-previews/851/poppies-1369329.jpg",
  "https://galleria.io/wp-content/themes/galleria/dist/images/demo/4m.jpg",
  "https://galleria.io/wp-content/themes/galleria/dist/images/demo/4m.jpg",
  "https://images.freeimages.com/images/large-previews/fe6/midsummer-fields-1-1394719.jpg",
  "https://galleria.io/wp-content/themes/galleria/dist/images/demo/4m.jpg",
  "https://images.freeimages.com/images/large-previews/fe6/midsummer-fields-1-1394719.jpg",
  "https://galleria.io/wp-content/themes/galleria/dist/images/demo/4m.jpg",
  "https://images.freeimages.com/images/large-previews/851/poppies-1369329.jpg",
  "https://images.freeimages.com/images/large-previews/851/poppies-1369329.jpg",
  "https://images.freeimages.com/images/large-previews/851/poppies-1369329.jpg",
];

var $gallery  = $(".lightgallery1").first();
var $loadMore = $("#load");

function loadMore(e) {
  
  for(var i = 0; i < 3; i++) {
     
    if(links.length) {

      var src   = links.pop();
      var $link = $("<a>");
      var $img  = $("<img>");

      $img.attr("src", src);
      $link.attr("href", src).addClass("item");
      
      $link.append($img);
      $gallery.append($link);

    } else {
      $loadMore.hide();
    }
    
  }
  
}

$loadMore.on("click", loadMore);
loadMore();