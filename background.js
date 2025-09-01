window.setInterval(function(){

    var randomH = Math.floor(Math.random() * 360);
  
     $('body').css({
   'background-color' : 'hsl(' + randomH + ', 100%, 70%)'
  });
  
  }, 1000);