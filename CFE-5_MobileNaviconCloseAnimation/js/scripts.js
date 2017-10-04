$(document).ready(function(){

  // Create Object For Each Animation
  var animation = {
    init : function() {
      animation.example1();
      animation.example2();
    },
    example1 : function() {
      $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
      });
    },
    example2 : function() {
      $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
      });
    }
  }

  // Initialize Objects
  animation.init();

});
