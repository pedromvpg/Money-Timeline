// Credit to Vincent Humeau
// https://www.vincent-humeau.com/
// https://vinceumo.github.io/CSS-3D-Scrolling-z-axis-demo/


let items = [];

const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginX"
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginY"
    )
  ),
  maxGap: 10
};


function moveCameraAngle(event) {
  const xGap =
    (((event.clientX - window.innerWidth / 2) * 500) /
      (window.innerWidth / 2)) *
    -1;
  const yGap =
    (((event.clientY - window.innerHeight / 2) * 500) /
      (window.innerHeight / 2)) *
    -1;
  const newPerspectiveOriginX =
    perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
  const newPerspectiveOriginY =
    perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginX",
    newPerspectiveOriginX
  );
  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginY",
    newPerspectiveOriginY
  );
}

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = items.length; // Or number of items you have in `.scene3D`
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}


var randX, randY, src1, src2, image1src, image2src;

// timelineData fetching data from variable array on data.js
$.each( timelineData, function( key, val ) {
  console.log(val);

  max = 100;
  min = -100;
  randX = Math.floor(Math.random() * (max - min) ) + min;
  randY = Math.floor(Math.random() * (max - min) ) + min;
  image1 = '';
  if( val.image1src != undefined){
    image1 = `<img height="40" src="${val.image1src}" />`;
  }

  image2 = '';
  if( val.image2src != undefined){
    image2 = `<img height="40" src="${val.image2src}" />`;
  }


  src1 = '';
  if( val.src1 != undefined){
    src1 = `<div> — <br/> <a target="_blank" href="${val.src1}"> source </a></div>`;
  }

  items.push(
    `<div class="event" id='${key}' style='transform: translate3D(0, 0, calc(var(--itemZ) * var(--cameraSpeed) * ${key+1} * -1px));'>
      <div class="event-inner" id='inner-${key}' style='transform: translate(${randX}%, ${randY}%);'>
        ${image1} ${image2}
        <h2>${val.name} - ${key}</h2>
        <div>${val.dates}</div>
        <div>${val.description}</div>
        ${src1}
      </div>
    </div>`
  );



});






$(".scene3D").append(items.join( "" ));


$('.scene3D').on('click','.event-inner', function(){
  console.log('eee');
  if ($(this).hasClass("center-read")) {
    $(this).removeClass("center-read");
  } else {
    $(this).addClass("center-read");
  }
});

$('ul').on('click','.enlarged', function(){
   $(this).removeClass('enlarged');
});


window.addEventListener("scroll", moveCamera);
window.addEventListener("mousemove", moveCameraAngle);
setSceneHeight();
