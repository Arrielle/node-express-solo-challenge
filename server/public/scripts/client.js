$(document).ready(function() {
  console.log('jquery loaded');

//get jokes from server
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(response){
      console.log('back from ajax with: ', response);
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]);
        $('#jokeBook').append(
          '<div class ="joke">' +
          '<h2>' + response[i].whoseJoke + '\'s Joke</h2>' +
          '<p>' + response[i].jokeQuestion + '</p>' +
          '<p>' + response[i].punchLine + '</p>' +
        '</div>'
        );
      }
    }//end success
  });//end ajax get

$('button').on('click', function(){
  //create an object from inputs
  var newJoke = $('#joke').val();
  var userName = $('#name').val();
  var newPunch = $('#punchLine').val();
console.log('almost and object: ', newJoke, userName, newPunch);

var jokeObject = {
  whoseJoke: userName,
  jokeQuestion: newJoke,
  punchLine: newPunch
};
//
// post new joke to server on submit
  $.ajax({
    type: 'POST',
    url: '/newJokes',
    data: jokeObject,
    success: function(response){
      console.log('post response: ', response);
      $('#jokeBook').empty();
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]);
        $('#jokeBook').append(
          '<div class ="joke">' +
          '<h2>' + response[i].whoseJoke + '\'s Joke</h2>' +
          '<p>' + response[i].jokeQuestion + '</p>' +
          '<p>' + response[i].punchLine + '</p>' +
        '</div>'
        );
      }
    }//ends success
  });//end ajax post

});//end button click

});//end doc ready
