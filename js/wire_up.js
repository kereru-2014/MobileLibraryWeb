$(document).ready(function () {

    ko.applyBindings(new BooksViewModel());
// put all event listeners in here
    $(".modalButton").on('click', function() {
        $("#dialog").dialog("open");
    });

    $("#box").on('click','.bookobject', function() {
      var bookId = ($(this).children('.id').first().text());
      console.log(bookId);
      // $("#dialogLendInfo").dialog("open");
      UpdateLendingInfo(bookId);

     });

});
