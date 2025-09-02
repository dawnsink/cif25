window.setInterval(function(){

    var randomH = Math.floor(Math.random() * 360);
  
     $('body').css({
   'background-color' : 'hsl(' + randomH + ', 100%, 70%)'
  });
  
  }, 10000);


// New code for creating circles
$(document).mousemove(function(event) {
  // Create a circle element
  var $circle = $('<div></div>');
  
  // Style the circle
  $circle.css({
      'position': 'absolute',
      'width': '20px',
      'height': '20px',
      'border': '1px solid black',
      'border-radius': '50%',
      'top': event.pageY - 10 + 'px', // Center the circle on the cursor
      'left': event.pageX - 10 + 'px', // Center the circle on the cursor
      'pointer-events': 'none', // Prevent interaction with the circle
      'opacity': 1,
      'transition': 'opacity 2s, transform 2s'
  });

  // Append the circle to the body
  $('body').append($circle);

  // Animate the circle to fade out and slightly move
  setTimeout(function() {
      $circle.css({
          'opacity': 0,
          'transform': 'scale(1.5)'
      });
  }, 10);

  // Remove the circle from the DOM after the animation
  setTimeout(function() {
      $circle.remove();
  }, 2000);
});
