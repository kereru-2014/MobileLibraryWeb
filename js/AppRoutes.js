function AppRoutes(
        bookListWrapper,
        modalAddBook,
        addBookButton,
        modalAddBorrower,
        addBorrowerButton,
        modalLend)
    {var self = this;
    self.bookListWrapperSelector = bookListWrapper;
    self.modalAddBookSelector = modalAddBook;
    self.addBookButtonSelector = addBookButton;
    self.modalAddBorrowerSelector = modalAddBorrower;
    self.addBorrowerButtonSelector = addBorrowerButton;
    self.modalLendSelector = modalLend;

    self.initialize = function() {
        self.addBookButtonSelector.on('click', function() {
            self.modalAddBookSelector.dialog("open");
        });
        self.modalAddBookSelector.dialog({ autoOpen: false, draggable: false });
        self.modalAddBookSelector.submit(function () {
            $(this).closest(".ui-dialog-content").dialog("close");
            return false;
        });


       self.addBorrowerButtonSelector.on('click', function() {
            self.modalAddBorrowerSelector.dialog("open");
        });
        self.modalAddBorrowerSelector.dialog({ autoOpen: false, draggable: false });
        self.modalAddBorrowerSelector.submit(function () {
            $(this).closest(".ui-dialog-content").dialog("close");
            return false;
        });

        self.bookListWrapperSelector.on('click', '.bookobject', function () {
            var borrowerID = $("#lend_borrower_id").val();
            console.log("outside if", borrowerID);
            if(borrowerID == null || borrowerID == ""){
                self.modalLendSelector.dialog("open");}
             else
             {
                console.log("inside if",borrowerID);
                alert("This borrower is not null");
            }
        });
        self.modalLendSelector.dialog({ autoOpen: false, draggable: false });
        self.modalLendSelector.submit(function () {
            $(this).closest(".ui-dialog-content").dialog("close");
            return false;
        });
    };

    self.initialize();
}

AppRoutes.prototype = {
    run_ko: function () {
        HomeController.RunKnockOut();
    },
};

