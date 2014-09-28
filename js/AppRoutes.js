
function AppRoutes(addModal, box, dialog) {
    var self = this;
    self.addModalSelector = addModal;
    self.addDialogSelector = dialog;
    self.boxSelector = box;

    self.initialize = function() {
        self.addModalSelector.on('click', function() {
            self.addDialogSelector.dialog("open");
        });
        self.boxSelector.on('click', '.bookobject', function () {
            var bookId = ($(this).children('.id').first().text());
            console.log(bookId);
            // $("#dialogLendInfo").dialog("open");
            UpdateLendingInfo(bookId);
        });

        self.addDialogSelector.dialog({ autoOpen: false, draggable: false });

        self.addDialogSelector.submit(function () {
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