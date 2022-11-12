$( document ).ready(function() {


  var max = 10000;
  var min = 1000;
  var current = $('.full-width').width();


  $("#zoomIN").click(function(){
      current = $('.full-width').width();
      if ( current <=  max){
          $('.full-width').css("width", (current + 1000) + "px");
      }
      return false;
  });


  $("#zoomOUT").click(function(){
      current = $('.full-width').width();
      if ( current >=  min){
          $('.full-width').css("width", (current - 1000) + "px");
      }
      return false;
  });



  window.addEventListener('dblclick', function(){
    current = $('.full-width').width();
    if ( current <=  max){
        $('.full-width').css("width", (current + 1000) + "px");
    }
  });






  var curYPos = 0,
      curXPos = 0,
      curDown = false;

  window.addEventListener('mousemove', function(e){
    if(curDown === true){
      window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
    }
  });

  window.addEventListener('mousedown', function(e){
    curDown = true; curYPos = e.pageY; curXPos = e.pageX;
    $('html').css('cursor', 'all-scroll');
  });
  window.addEventListener('mouseup', function(e){
    curDown = false;
    $('html').css('cursor', 'auto');
  });









  $.getJSON( "https://illustrious-twilight-0e9a1f.netlify.app/data.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });





});
