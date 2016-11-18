$(document).ready(function() {

  var setDate = function() {
    var date =new Date(Date.now());

    var hours = date.getHours();
    var minutes = displayTime(date.getMinutes());
    var seconds = displayTime(date.getSeconds());

    newColor = getRandomColor();

    $('#clock').css('background-color', newColor);

    var time = hours + ':' + minutes + ':' + seconds;
    $('#clock').html(time);
  };

  var displayTime = function(number) {
    if (number < 10) {
      return '0' + number;
    } else {
      return number;
    }
  };

  setInterval(function(){ setDate(); }, 1000);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

});
