$(document).ready(function () {
    var bookListWrapper = $(".bookListWrapper");
    var modalAddBook = $("#modalAddBook");
    var addBookButton = $("#addBookButton");
    var modalAddBorrower = $("#modalAddBorrower");
    var addBorrowerButton = $("#addBorrowerButton");
    var modalLend = $ ("#modalLend");
    var modalReturn = $ ("#modalReturn");
    var GoogleListWrapper = $(".GoogleListWrapper");
    var modalGoogleAdd = $("#modalGoogleBook");

    var app = new AppRoutes(
        bookListWrapper,
        modalAddBook,
        addBookButton,
        modalAddBorrower,
        addBorrowerButton,
        modalLend,
        modalReturn,
        GoogleListWrapper,
        modalGoogleAdd
        );

    app.run_ko();
});
