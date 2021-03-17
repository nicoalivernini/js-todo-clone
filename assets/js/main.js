// Creare una Todo-list
// in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.
var toDoList = $('#to-do-list');

var title = $('#title');

var scrivi = $('#modify')

var modifica = $('#edit');

var cancella = $('#delete');

var input = $('#add');

// console.log(toDoList, title, modifica, cancella);

$(document).ready(function(){

  $('#sent').click(function(){
    var title = $('#add').val();
    console.log(title);
    $('#add').val('');
  })

  var cloneLi = $('#to-do-list ul li');
  console.log(cloneLi);
  cloneLi.children('#title').text(title);


}) //Chiusura ready







// $('#add').keyup(function(e) {
//   if (e.which == 13) {
//     var title = $('#add').val();
//     $('#title').append(title);
//     $('#add').val('');
//   }
// })
