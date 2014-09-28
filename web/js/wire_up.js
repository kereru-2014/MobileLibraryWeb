$(document).ready(function () {

    ko.applyBindings(new BooksViewModel());
// put all event listeners in here
    $(".modalButton").on('click', function() {
        $("#dialog").dialog("open");
    });

    //add this listener for the borrower button

    $(".modalButtonAddBorrower").on('click', function () {
        $("#dialogAddNewBorrower").dialog("open");
    });

    $("#box").on('click','.bookobject', function(e) {
      console.log(this($));
      console.log(e.target+"and"+ $(e.target).attr('class'));
      // UpdateLendingInfo(e.target.id)
        // $("#dialogLendInfo").dialog("open");

     });

});
