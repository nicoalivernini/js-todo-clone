// Creare una Todo-list
// in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.
$(document).ready(function(){
//Al click sul bottone
$('#add').click(function () {
  //Prendo il valore dell'input
  var title = $('#insert-title').val();
  //Svuoto l'input mettendo stringa vuota
  $('#insert-title').val('');
  
  //Clono il li del template
  var newTemplate = $('#template li').clone();
})
})//Chiusura ready
