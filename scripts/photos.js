var moreImages = [
  "http://lorempixel.com/72/72/",
  "http://lorempixel.com/72/72/",
  "http://lorempixel.com/72/72/",
  "http://lorempixel.com/72/72/",
  "http://lorempixel.com/72/72/",
  "http://lorempixel.com/72/72/",
  "http://lorempixel.com/72/72/"
];

$("#more").on("click", function(){
  if (moreImages.length === 0) { return; }
  var target = $("#imageContainer");

  moreImages.splice(0,3).forEach(function(item){
    target.append("<li><img src=\"" + item + "\" /></li>");
  });
});