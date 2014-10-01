function AppRoutes(
        bookListWrapper,
        modalAddBook,
        addBookButton,
        modalAddBorrower,
        addBorrowerButton,
        modalLend,
        modalReturn,
        GoogleListWrapper,
        modalGoogleAdd)
    {var self = this;
    self.bookListWrapperSelector = bookListWrapper;
    self.modalAddBookSelector = modalAddBook;
    self.addBookButtonSelector = addBookButton;
    self.modalAddBorrowerSelector = modalAddBorrower;
    self.addBorrowerButtonSelector = addBorrowerButton;
    self.modalLendSelector = modalLend;
    self.modalReturnSelector = modalReturn;
    self.GoogleListWrapperSelector = GoogleListWrapper;
    self.modalGoogleAddSelector = modalGoogleAdd;

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
        self.modalAddBorrowerSelector.dialog({ 
            autoOpen: false, 
            draggable: false, 
            resizable:false,
            width: 800,
            height: 500,
            autoOpen: false,
            show: {
              effect: "blind",
              duration: 500
            },
            hide: {
              effect: "blind",
              duration: 500
            } });
        self.modalAddBorrowerSelector.submit(function () {
            $(this).closest(".ui-dialog-content").dialog("close");
            return false;
        });

        self.bookListWrapperSelector.on('click', '.bookobject', function () {
            var borrowerID = $("#lend_borrower_id").val();
            if(borrowerID == null || borrowerID == ""){
                self.modalLendSelector.dialog("open");}
             else{
                self.modalReturnSelector.dialog("open");}
         });

        self.modalLendSelector.dialog({ 
            autoOpen: false, 
            draggable: false, 
            resizable:false,
            width: 500,
            height: 800,
            autoOpen: false,
            show: {
              effect: "blind",
              duration: 1000
            },
            hide: {
              effect: "blind",
              duration: 1000
            } });

        self.modalLendSelector.submit(function () {
            $(this).closest(".ui-dialog-content").dialog("close");
            return false;
        });

        self.modalReturnSelector.dialog({ 
            autoOpen: false, 
            draggable: false, 
            resizable:false,
            width: 500,
            height: 800,
            autoOpen: false,
            show: {
              effect: "blind",
              duration: 1000
            },
            hide: {
              effect: "blind",
              duration: 1000
            } });
        self.modalReturnSelector.submit(function () {
            $(this).closest(".ui-dialog-content").dialog("close");
            return false;
        });

        self.GoogleListWrapperSelector.on('click', function() {
            self.modalGoogleAddSelector.dialog("open");
        });
        self.modalGoogleAddSelector.dialog({ 
            autoOpen: false, 
            draggable: false, 
            resizable:false,
            width: 500,
            height: 800,
            autoOpen: false,
            show: {
              effect: "blind",
              duration: 1000
            },
            hide: {
              effect: "blind",
              duration: 1000
            } });
        self.modalGoogleAddSelector.submit(function () {
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

