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









  // 10 ** 9 years
  // 1 thousand million years
  // 100,000,000 | 1 Billion years (US) | 1 Milliard years (EU) | 1 Giga years
  // * 5 billion years (solar system formation)
  let beggining = (5 * (10 ** 9))*(-1);
  let ending = 2050;

  let one_billion = 10 ** 9;
  let hundred_million = 10 ** 8;
  let ten_millions = 10 ** 7;
  let one_million = 10 ** 6;
  let hundred_thousand = 10 ** 5;
  let tens_thousand = 10 ** 4;
  let thousand = 10 ** 3;
  let hundred = 10 ** 2;
  let ten = 10;
  let one = 1;

  console.log("Beggining:  " + beggining);
  console.log("Ending:     " + ending);

  var timeCursor = beggining;

  function mapLogDate(cursor){
    var out,x,y,t,z;
    //cursor = Math.abs(cursor);
    //cursor = 1000;


    let x0 = 0;
    let x1 = 0;
    let x2 = 10;
    let x3 = -6000000000;

    let y0 = 100;
    let y1 = 0;
    let y2 = 0;
    let y3 = 0;




    //((1-t)((1-t)((1-t)x_{0}+tx_{1})+t((1-t)x_{1}+tx_{2}))+t((1-t)((1-t)x_{1}+tx_{2})+t((1-t)x_{2}+tx_{3})) ,  (1-t)((1-t)((1-t)y_{0}+ty_{1})+t((1-t)y_{1}+ty_{2}))+t((1-t)((1-t)y_{1}+ty_{2})+t((1-t)y_{2}+ty_{3})))
    //((1-t)((1-t)((1-t)*x0  + t*x1) +t((1-t)*x1  +t*x2))  +t((1-t)((1-t)*x1+t*x2)    +t((1-t)*x2  +t*x3))   ,  (1-t)((1-t)((1-t)*y0  +t*y1)  +t((1-t)*y1  +t*y2))  +t((1-t)((1-t)*y1  +t*y2)+t((1-t)*y2 +t*y3)))

    t = ( cursor / x3 );




    x = (1-t) * ((1-t)*((1-t)*x0 + t*x1) + t*((1-t)*x1 + t*x2)) + t*((1-t)*((1-t)*x1 + t*x2) + t*((1-t)*x2 + t*x3))
    y = (1-t) * ((1-t)*((1-t)*y0 + t*y1) + t*((1-t)*y1 + t*y2)) + t*((1-t)*((1-t)*y1 + t*y2) + t*((1-t)*y2 + t*y3))

    out = [cursor,y]
    //y = ( (1.000005*1)**(cursor/2)*(cursor-2050) )*100;
    //return y + " | " + cursor;
    // return y === 0 ? 0 : Math.pow(2, 10 * cursor - 10);
    return out;



  }

  var htmlContent;


  var erasVals = [
    /*
    [one_billion,"Billions","Geologic History"],
    [hundred_million,"Hundred Millions","???"],
    [ten_millions,"Ten Millions","YYYY"],
    [one_million,"Millions","eeee"],
    [hundred_thousand,"Hundred thousand","zzzz"],
    [tens_thousand,"Ten thousand","Pre-history"],
    [thousand,"Thousand","BC"],
    [hundred,"Hundred","BC"],
    //AD
    [hundred,"Hundred","AD"],
    [hundred,"Hundred","late AD"],
    [one,"Tens","XX Centurty"],
    [one,"Ones","Reset"]
    */
    [one_billion,"Billions","Geologic History"],
    [hundred_million,"Ten Thousands","???"],
    [ten_millions,"AD","YYYY"],
    [one_million,"XX century","eeee"],
  ];

  var panels = erasVals.length;

  var timeTrack = 0;

  for (let i = 0; i < panels; i++) {
      console.log(erasVals[i][1]);
      /*
      $('<div>', {id: 'eras-holder-'+(i+1), class: 'eras-holder',
                  style: 'width: '+(100-( (100/panels)*i) )+'%',
                  title: erasVals[i][1]+' '+erasVals[i][0]}).appendTo('#eras-holder');
      */
      $('<div>', {id: 'eras-panel-'+(i+1), class: 'eras-panel',
                  style: 'width: '+(100/panels)+'%; margin-left: '+(100/panels)*i+'%',
                  title: erasVals[i][1]+' '+erasVals[i][0]}).appendTo('#eras-holder');


      /*
      $('<div>', {id: 'eras-title-'+(i+1), class: 'eras-title'}).html(i +" "+ erasVals[i][2]).appendTo('#eras-panel-'+(i+1));

      //BC
      if(i < 8){
        for (let j = -10; j <= -1; j++) {
              h =  -5 * Math.log((erasVals[i][0]*j)* + 1);
              htmlContent = j+" "+erasVals[i][1]+' '+(erasVals[i][0]*j).toLocaleString("en-US")+' '+(10**(panels-((i+1)+2))).toLocaleString("en-US");
              $('<div>', {id: 'eras-item-'+(i+1)+j, class: 'eras-item'}).html(htmlContent).appendTo('#eras-panel-'+(i+1));
        }
      //AD
      }else{
        for (let j = 0; j < 10; j++) {

              htmlContent =  timeTrack + " - "+j+" **** "+erasVals[i][1]+' '+(erasVals[i][0]*j).toLocaleString("en-US")+' '+(10**(panels-((i+1)+1))).toLocaleString("en-US");
              $('<div>', {id: 'eras-item-'+(i+1)+j, class: 'eras-item'}).html(htmlContent).appendTo('#eras-panel-'+(i+1));
              timeTrack = timeTrack+erasVals[i][0];
        }
      }
      */
  }








  var date;
  var items = [];

  $.each( timelineData, function( key, val ) {
    //console.log(val);


    image1 = '';
    if( val.image1src != undefined){
      image1 = `<img height="40" src="${val.image1src}" />`;
    }

    image2 = '';
    if( val.image2src != undefined){
      image2 = `<img height="40" src="${val.image2src}" />`;
    }


    src1 = '';
    if( val.src1 != ''){
      src1 = `<a target="_blank" href="${val.src1}">source</a>`;
    }
    src2 = '';
    if( val.src2 != ''){
      src2 = ` | <a target="_blank" href="${val.src2}">source</a>`;
    }




    /*

    html = `
      ${image1} ${image2}
      <h3 class="element-name">${val.name} - ${key}</h3>
      <div class="element-dates">${val.dates}</div>
      <div class="element-description">${val.description}</div>
      <div class="element-source">${src1} ${src2}</div>
    `;
    if( val.dateCoord < -10000 ){


      // -10,000,000,000   0%
      // -10,000           100%

      //y = ( (1.000005*1)**(val.dateCoord/2)*(val.dateCoord-2050) )*100;
      y = 0.28*1.0039**(val.dateCoord);
      y = 1.00000000000001**(val.dateCoord-10000);

      y = (Math.LN2 / 2050)**(val.dateCoord-2050);





      $('<div>', {style: 'margin-left:'+(  y  )+'%',class: 'timeline-element'}).html(html).appendTo('#eras-panel-1');

    }else if( val.dateCoord >= -10000  && val.dateCoord < 0 ){
      $('<div>', {style: 'margin-left:0%',class: 'timeline-element'}).html(html).appendTo('#eras-panel-2');

    }else if( val.dateCoord >= 0  && val.dateCoord < 1900 ){
      $('<div>', {style: 'margin-left:10%',class: 'timeline-element'}).html(html).appendTo('#eras-panel-3');

    }else if( val.dateCoord >= 1900  && val.dateCoord < 2050 ){
      $('<div>', {style: 'margin-left:10%', class: 'timeline-element'}).html(html).appendTo('#eras-panel-4');

    }

    */




    date = val.dateCoord
    y = 196.792-175.283*Math.log10(Math.log10(2051-date)+3.5662);


    items.push(
      `<li id='${key}' style='padding-left: ${y}%' >
        <div class='timeline-element'>
          ${image1} ${image2}
          <h3 class="element-name">${val.name} - ${key}</h3>
          <div class="element-dates">${val.dates}</div>
          <div class="element-description">${val.description}</div>
          <div class="element-source">${src1} ${src2}</div>
        </div>
      </li>`
    );



  });




  $( "<ul/>", { html: items.join( "" ) }).appendTo( "#item-holder" );













  for (let i = 1; i <= 10; i++) {

      console.log("Here 0 ---> " + timeCursor.toLocaleString("en-US"));
      console.log("Map 0  >>>>>>>>>>>> " + mapLogDate(timeCursor));
      // Hundred Millions
      if(timeCursor == -1000000000){
        console.log("Hundred Millions");
        timeCursor = timeCursor + hundred_million;
        for (let j = 1; j < 10; j++) {
          console.log("Here 1 ---> " + timeCursor.toLocaleString("en-US"));
          console.log("Map 1  >>>>>>>>>>>> " + mapLogDate(timeCursor));


          // Ten Millions
          if(timeCursor == -100000000){
            console.log("Ten Millions");
            timeCursor = timeCursor + ten_millions;
            for (let j = 1; j < 10; j++) {
              console.log("Here 2 ---> " + timeCursor.toLocaleString("en-US"));
              console.log("Map 2  >>>>>>>>>>>> " + mapLogDate(timeCursor));


                // Millions
                if(timeCursor == -10000000){
                  console.log("Millions");
                  timeCursor = timeCursor + one_million;
                  for (let j = 1; j < 10; j++) {
                    console.log("Here 3 ---> " + timeCursor.toLocaleString("en-US"));
                    console.log("Map 3  >>>>>>>>>>>> " + mapLogDate(timeCursor));



                    // Hundred thousand
                    if(timeCursor == -1000000){
                      console.log("Hundred thousand");
                      timeCursor = timeCursor + hundred_thousand;
                      for (let j = 1; j < 10; j++) {
                        console.log("Here 4 ---> " + timeCursor.toLocaleString("en-US"));
                        console.log("Map 4  >>>>>>>>>>>> " + mapLogDate(timeCursor));


                        // Ten thousand
                        if(timeCursor == -100000){
                          console.log("Ten thousand");
                          timeCursor = timeCursor + tens_thousand;
                          for (let j = 1; j < 10; j++) {
                            console.log("Here 5 ---> " + timeCursor.toLocaleString("en-US"));
                            console.log("Map 5  >>>>>>>>>>>> " + mapLogDate(timeCursor));


                            // Thousand
                            if(timeCursor == -10000){
                              console.log("Thousand");
                              timeCursor = timeCursor + thousand;
                              for (let j = 1; j < 10; j++) {
                                console.log("Here 6 ---> " + timeCursor.toLocaleString("en-US"));
                                console.log("Map 6  >>>>>>>>>>>> " + mapLogDate(timeCursor));


                                // Hundred
                                if(timeCursor == -1000){
                                  console.log("Hundred");
                                  timeCursor = timeCursor + hundred;
                                  for (let j = 1; j < 10; j++) {
                                    console.log("Here 7 ---> " + timeCursor.toLocaleString("en-US"));
                                    console.log("Map 7  >>>>>>>>>>>> " + mapLogDate(timeCursor));


                                    if(timeCursor == -100){
                                      console.log("AD");
                                      timeCursor = timeCursor + hundred;
                                      for (let j = 1; j <= 10; j++) {
                                        console.log("Here 8 ---> " + timeCursor.toLocaleString("en-US"));
                                        console.log("Map 8  >>>>>>>>>>>> " + mapLogDate(timeCursor));

                                        if(timeCursor == 900){
                                          console.log("Millenium 1");
                                          timeCursor = timeCursor + hundred;
                                          for (let j = 1; j <= 10; j++) {
                                            console.log("Here 9 ---> " + timeCursor.toLocaleString("en-US"));
                                            console.log("Map 9  >>>>>>>>>>>> " + mapLogDate(timeCursor));


                                            if(timeCursor == 1900){
                                              console.log("Century XX");
                                              timeCursor = timeCursor + ten;
                                              for (let j = 1; j <= 10; j++) {
                                                console.log("Here 10 ---> " + timeCursor.toLocaleString("en-US"));
                                                console.log("Map 10  >>>>>>>>>>>> " + mapLogDate(timeCursor));

                                                if(timeCursor == 2000){
                                                  console.log("Century XXI");
                                                  timeCursor = timeCursor + ten;
                                                  for (let j = 1; j <= 5; j++) {
                                                    console.log("Here 11 ---> " + timeCursor.toLocaleString("en-US"));
                                                    console.log("Map 11  >>>>>>>>>>>> " + mapLogDate(timeCursor));
                                                    timeCursor = timeCursor + ten;
                                                  }
                                                }


                                                timeCursor = timeCursor + ten;
                                              }
                                            }

                                            timeCursor = timeCursor + hundred;
                                          }
                                        }


                                        timeCursor = timeCursor + hundred;
                                      }
                                    }


                                    timeCursor = timeCursor + hundred;
                                  }
                                }


                                timeCursor = timeCursor + thousand;
                              }
                            }


                            timeCursor = timeCursor + tens_thousand;
                          }
                        }


                        timeCursor = timeCursor + hundred_thousand;
                      }
                    }


                    timeCursor = timeCursor + one_million;
                  }
                }


              timeCursor = timeCursor + ten_millions;
            }
          }

          // advance 1 hundred million years
          timeCursor = timeCursor + hundred_million;
        }
      }

      // advance 1 billion years
      timeCursor = timeCursor + one_billion;

  }

  /*
  $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://illustrious-twilight-0e9a1f.netlify.app/data.json'), function (data) {

    var obj = jQuery.parseJSON(data.contents);
    console.log(obj);

    /*

    dates: "A.D. 1850–1933"
    image1: {valueType: 'IMAGE'}
    image1src: "https://www.atlantafed.org/-/media/images/about/tours/story-of-money/05-money-takes-many-shapes/10.jpg"
    leftshift: 68
    location: "China"
    name: "Shoe money\n"
    src1: "https://www.atlantafed.org/about/tours/story-of-money/05-money-takes-many-shapes/shoe-money.aspx"
    [[Prototype]]: Object

    * /

    var items = [];
    $.each( obj, function( key, val ) {
      items.push( "<li id='" + key + "' style='padding-left: "+val.leftshift+"%'>" + val.name + "</li>" );
    });

    /*
    $( "<ul/>", {
      html: items.join( "" )
    }).appendTo( "#item-holder" );
    *
    /

  });
  */








});
