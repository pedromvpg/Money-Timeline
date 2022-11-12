$( document ).ready(function() {

  /*
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

  */



  var date,shift;
  var items = [];


  $.each( timelineHeaderData, function( key, val ) {

    date = val.date_coord
    shift = 196.792-175.283*Math.log10(Math.log10(2051-date)+3.5662);

    items.push(
      `<li id='header-${key}' class="header-label" style='padding-left: ${shift}%' >
        <div class='timeline-element'>
          <h4 class="element-name">${val.name}</h4>
          <div class="element-dates">${Math.abs(val.dates)}</div>
          <div class="element-description">${val.description}</div>
        </div>
      </li>`
      );
  });

  $( "<ul/>", { html: items.join( "" ) }).appendTo( "#header-item-holder" );











  items = [];

  $.each( timelineData, function( key, val ) {
    //console.log(val);


    image1 = '';
    if( val.image1src != undefined){
      image1 = `<img class="event-image" src="${val.image1src}" />`;
    }

    image2 = '';
    if( val.image2src != undefined){
      image2 = `<img class="event-image" src="${val.image2src}" />`;
    }


    src1 = '';
    if( val.src1 != ''){
      src1 = `<a target="_blank" href="${val.src1}">source</a>`;
    }
    src2 = '';
    if( val.src2 != ''){
      src2 = ` | <a target="_blank" href="${val.src2}">source</a>`;
    }

    //https://www.desmos.com/calculator/fqh9gincyg
    //https://math.stackexchange.com/questions/4573741/logarithmic-equation-to-map-values-between-0-and-100-based-on-dates

    date = val.date_coord
    shift = 196.792-175.283*Math.log10(Math.log10(2051-date)+3.5662);


    items.push(
      `<li id='${key}' style='padding-left: ${shift}%' >
        <div class='timeline-element'>
          ${image1} ${image2}
          <h3 class="element-name">${val.name}</h3>
          <div class="element-dates">${val.dates}</div>
          <div class="element-description">${val.description}</div>
          <div class="element-source">${src1} ${src2}</div>
        </div>
      </li>`
    );



  });

  $( "<ul/>", { html: items.join( "" ) }).appendTo( "#item-holder" );


  $('ul').on('click','.event-image', function(){
    $('.event-image').removeClass('enlarged');
    $(this).addClass('enlarged');
  });

  $('ul').on('click','.enlarged', function(){
     $(this).removeClass('enlarged');
  });


  /*

  $( ".timeline-element" ).hover(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(this).offset().top-220,
        scrollLeft: $(this).offset().left-200
    }, 2000);
  });

  $('ul').on('hover','.timeline-element', function(){

      $([document.documentElement, document.body]).animate({
          scrollTop: $(this).offset().top-220,
          scrollLeft: $(this).offset().left-200
      }, 200);

  });

  */





});
