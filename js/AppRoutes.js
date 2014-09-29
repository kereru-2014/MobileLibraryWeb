
function AppRoutes(addModal, box, dialog, addBorrowerButton, dialogForNewBorrower) {
    var self = this;
    self.addModalSelector = addModal;
    self.addDialogSelector = dialog;
    self.boxSelector = box;
    self.borrowerModalSelector = addBorrowerButton;
    self.dialogAddNewBorrowerSelector = dialogForNewBorrower;

    self.initialize = function() {
        self.addModalSelector.on('click', function() {
            self.addDialogSelector.dialog("open");
        });

        self.addDialogSelector.dialog({ autoOpen: false, draggable: false });

        self.addDialogSelector.submit(function () {
            $(this).closest(".ui-dialog-content").dialog("close");
            return false;
        });
        self.boxSelector.on('click', '.bookobject', function () {
            var bookId = ($(this).children('.id').first().text());
            console.log(bookId);
            // $("#dialogLendInfo").dialog("open");
            // UpdateLendingInfo(bookId);
        });

       self.borrowerModalSelector.on('click', function() {
            self.dialogAddNewBorrowerSelector.dialog("open");
        });

        self.dialogAddNewBorrowerSelector.dialog({ autoOpen: false, draggable: false });

        self.dialogAddNewBorrowerSelector.submit(function () {
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
}
