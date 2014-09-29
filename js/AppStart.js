$(document).ready(function () {
    var addModal = $(".modalButton");
    var box = $("#box");
    var dialog = $("#dialog");
    var addBorrowerButton = $("#addBorrower");
    var dialogForNewBorrower = $("#dialogAddNewBorrower");

    var app = new AppRoutes(
        addModal,
        box,
        dialog,
        addBorrowerButton,
        dialogForNewBorrower
        );

    app.run_ko();
});
