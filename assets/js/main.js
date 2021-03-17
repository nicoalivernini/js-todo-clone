// Creare una Todo-list
// in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.
$(document).ready(function(){
//Al click sul bottone
  $('#add').click(function(){
    //Prendo il valore dell'input
    var inputTitle = $('#input-title').val();
    //Svuoto l'input mettendo stringa vuota
    $('#input-title').val('');

    //Clono il li del template
    var template = $('#template li').clone();
    //Seleziono il title e inserisco il valore
    template.children('span.title').text(inputTitle);

    //Al click rimuovo interno degli span
    template.children('span.delete').click(function(){
      $(this).parent().remove();
    });

    //Al click su Modifica do la possibilità di modificare
    template.children('span.edit').click(function(){
      var title = $(this).siblings('span.title').text();
      $(this).siblings('span.title').hide();

      $(this).siblings('input').val(title).show();
    });

    template.children('input').keyup(function(e){
      if (e.which == 13) {
        var title = $(this).val();
        // console.log($(this));
        $(this).hide();
        $(this).siblings('span.title').text(title).show();
      }
    });

    $('#to-do-list').append(template);
  });

  //  //Abilito la possibilità di inserire utilizzando invio della tastiera
  // $('#input-title').keyup(function(e){
  //   if (e.which == 13) {
  //     var inputTitle = $('#input-title').val();
  //     var template = $('#template li').clone();
  //     template.children('span.title').text(inputTitle);
  //     //Svuoto l'input mettendo stringa vuota
  //     // $('#input-title').val('');
  //   } else {
  //
  //   }
  // })



});//Chiusura ready
