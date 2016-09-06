
$('.random-button').on('click', function(){
  changeColor('body');
});

$('.reset-button').on('click', function(){
  resetColor();
});

$('.switch-button').on('click', function(){
  
});

function generateRandomNum() {
  return Math.floor(Math.random() * (16 - 0) + 0);
}

function changeColor(html) {
  var hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  var color = '#';
  var random = generateRandomNum();
  for (var i = 0; i < 6; i++) {
    console.log(random);
    color += hexColors[random];
    random = generateRandomNum();
  }
  console.log(color);
  $(html).css('backgroundColor', color);
}

function resetColor() {
  $('body').css('backgroundColor', 'white');
}
