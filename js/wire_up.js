$(document).ready(function () {

    ko.applyBindings(new BooksViewModel());
// put all event listeners in here
    $(".modalButton").on('click', function() {
        $("#dialog").dialog("open");
    });
    $("#box").on('click','.bookobject', function(e) {
      console.log($(this).children('.id').first().text());
      console.log(e.target);
      // UpdateLendingInfo(e.target.id)
        // $("#dialogLendInfo").dialog("open");

     });

});
