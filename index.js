$(document).ready(function() {
  var date =new Date(Date.now());

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var time = hours + ':' + minutes + ':' + seconds;
  $('#clock').html(time);

});
