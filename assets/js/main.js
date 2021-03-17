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

$(document).ready(function(){

//Scrivo un'attività e clicco su aggiungi
  $('#sent').click(function(){
    var title = $('#add').val();
    //Inserisco ciò che è stato scritto nel title
    $('#title').text(title);
    //Libero l'input
    $('#add').val('');
  })

$('#delete').click(function(){
  $('#')
})




}) //Chiusura ready



$('#add').keyup(function(e) {
  if (e.which == 13) {
    var title = $('#add').val();
    $('#title').append(title);
    $('#add').val('');
  }
})
