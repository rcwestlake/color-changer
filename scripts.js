
$('.random-button').on('click', function(){
  changeColor();
});

$('.reset-button').on('click', function(){
  resetColor();
});


function changeColor() {
  var hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  var color = '#';
  var random = Math.floor(Math.random() * (16 - 0) + 0);
  for (var i = 0; i < 6; i++) {
    console.log(random);
    color += hexColors[random];
    random = Math.floor(Math.random() * (16 - 0) + 0);
  }
  console.log(color);
  $('body').css('backgroundColor', color);

}

function resetColor() {
  $('body').css('backgroundColor', 'white');
}
