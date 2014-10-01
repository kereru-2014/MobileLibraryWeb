function GetAllBooks(callback) {
    $.getJSON("/api/v1/books/", function (data) { callback(data); });
}

function GetAllBorrowers(callback) {
    $.getJSON("/api/v1/borrowers/", function (data) { callback(data); });
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
        success: function () {
            ClearAddBookModal();
        }
    });
}

function DeleteBook(parameter) {
    $.ajax({
        url: "api/v1/books/" + parameter,
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
        success: function() {
            ClearBorrowerModal();
        }
    });
}

function ApiLendBook(book) {
       console.log("in ApiLendBook ", book);
        $.ajax("api/v1/books/" + book.id + "/lend", {
        data: ko.toJSON(book),
        type: "patch",
        contentType: "application/json",
        success: function() {}
    });
}

function ApiReturnBook(book) {

        $.ajax("api/v1/books/" + book.id + "/return", {
        type: "patch",
        success: function() {}
    });
}

function ApiGoogleBooksSearch(searched_text,callback){
    $.ajax("/api/v1/books/find?q=" + searched_text.googleBooksSearch, {
        type: "get",
        contentType: "application/json",
        success: function(data){
            callback(data)
            console.log(data)
        }
    });
}


