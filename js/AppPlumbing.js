//put you api facade code in here

function GetAllBooks(callback) {
    $.getJSON("/api/v1/books/", function (data) { callback(data); });
}

function GetBook(parameter, callback) {
    var temp = $.getJSON("/api/v1/books/" + parameter, function (data) { callback(data); });
        console.log("plumbing", temp);
}

function PersistBook(book) {
    $.ajax("api/v1/books", {
        data: ko.toJSON(book),
        type: "POST",
        contentType: "application/json",
        success: function () {alert("Book Added Successfully")}
    });
}

function DeleteBook(parameter) {
    $.ajax({
        url: "api/v1/books" + parameter,
        type: 'DELETE'
    });
}

function SearchBorrowers(parameter, callback) {
    $.getJSON("api/customers/search/" + parameter, function (data) { callback(data); });
}

function PersistBorrower(borrower) {
    $.ajax("api/v1/borrowers", {
        data: ko.toJSON(borrower),
        type: "post",
        contentType: "application/json",
        success: function() {alert("Borrower Added Successfully")}
    })
}

function ApiLendBook(book) {
        $.ajax("api/v1/books/" + book.id + "/lend", {
        data: ko.toJSON(book),
        type: "patch",
        contentType: "application/json",
        success: function() {alert("Book lent successfully")}
    })
}

function ApiReturnBook(book) {
    console.log("in ApiReturnBook ", book);
    //     $.ajax("api/v1/books/" + book.id + "/return", {
    //     data: ko.toJSON(book),
    //     type: "patch",
    //     contentType: "application/json",
    //     success: function() {alert("Book return successfully")}
    // })
}

