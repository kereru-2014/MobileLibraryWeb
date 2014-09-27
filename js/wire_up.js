$(document).ready(function () {

    ko.applyBindings(new BooksViewModel());
// put all event listeners in here
    $(".modalButton").on('click', function() {
        $("#dialog").dialog("open");
    });
});
