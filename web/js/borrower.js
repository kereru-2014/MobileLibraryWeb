var BooksViewModel = function() {
    var self = this;


    function PersistBorrower(borrower) {
        $.ajax("api/v1/borrower", {
            data: ko.toJSON(borrower),
            type: "post",
            contentType: "application/json",
            success: function () { alert("Borrowr Added Successfully") }

        });

    };
}
