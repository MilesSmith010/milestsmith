var moreImages = [
  "https://res.cloudinary.com/milessmith/image/upload/v1591902620/Personal%20Site/IMG_9563-2.jpg",
  "https://res.cloudinary.com/milessmith/image/upload/v1591902620/Personal%20Site/IMG_9563-2.jpg",
    "https://res.cloudinary.com/milessmith/image/upload/v1591902620/Personal%20Site/IMG_9563-2.jpg",
    "https://res.cloudinary.com/milessmith/image/upload/v1591902620/Personal%20Site/IMG_9563-2.jpg",
];

$("#more").on("click", function(){
  if (moreImages.length === 0) { return; }
  var target = $("#imageContainer");

  moreImages.splice(0,3).forEach(function(item){
    target.append("<li><img src=\"" + item + "\" /></li>");
  });
});