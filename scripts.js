
//event listener for both buttons
//call functions when button is clicked

$('.random-button').on('click', function(){
  changeColor();
});

$('.reset-button').on('click', function(){
  resetColor();
});


function changeColor() {
  $('body').css('backgroundColor', 'blue');
}

function resetColor() {
  $('body').css('backgroundColor', 'white');
}
//functions for each action
//originally change the color to just blue to make sure it works
