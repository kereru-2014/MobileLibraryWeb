$(document).ready(function () {
    var bookListWrapper = $("#bookListWrapper");
    var modalAddBook = $("#modalAddBook");
    var addBookButton = $("#addBookButton");
    var modalAddBorrower = $("#modalAddBorrower");
    var addBorrowerButton = $("#addBorrowerButton");
    var modalLend = $ ("#modalLend");

    var app = new AppRoutes(
        bookListWrapper,
        modalAddBook,
        addBookButton,
        modalAddBorrower,
        addBorrowerButton,
        modalLend
        );

    app.run_ko();
});
