$('.dropdown-toggle').click(function(e) {
  if ($(document).width() > 768) {
    e.preventDefault();

    var url = $(this).attr('href');

       
    if (url !== '#') {
    
      window.location.href = url;
    }

  }
});

// MDB Lightbox Init
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})