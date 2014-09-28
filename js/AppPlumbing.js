//put you api facade code in here

function GetAllBooks(callback) {
    $.getJSON("/api/v1/books/", function (data) { callback(data); });
};

function PersistBook(book) {
    $.ajax("api/v1/books", {
        data: ko.toJSON(book),
        type: "post",
        contentType: "application/json",
        success: function () { alert("Book Added Successfully") }
    });
};

function DeleteBook(parameter) {
    $.ajax({
        url: "api/v1/books" + parameter,
        type: 'DELETE'
    });
};


function SearchBorrowers(parameter, callback) {
    $.getJSON("api/customers/search/" + parameter, function (data) { callback(data); });
};