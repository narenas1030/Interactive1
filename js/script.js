$('.one-half').hover(function() {
     $('.second-half').fadeOut();
  }, function() {
     $('.second-half').fadeIn();
  });

$('.second-half').hover(function() {
     $('.one-half').fadeOut();
  }, function() {
     $('.one-half').fadeIn();
  });


