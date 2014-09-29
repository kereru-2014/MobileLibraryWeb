// Class to represent a book
function Book(data) {
    var self = this;
    self.id = ko.observable(data.Id);
    self.title = ko.observable(data.title);
    self.author = ko.observable(data.author);
    self.ISBN = ko.observable(data.ISBN);
    self.image_url = ko.observable(data.image_url);
    self.lent_date = ko.observable(data.lent_date);
    self.reminder_date = ko.observable(data.reminder_date);
    self.borrower_id = ko.observable(data.borrower_id);
}

function Borrower(data) {
    var self = this;
    self.id = ko.observable(data.Id);
    self.name = ko.observable(data.name);
    self.email = ko.observable(data.email);
    self.phone_number = ko.observable(data.phone_number);
 }


function HomeViewModel() {
    var self = this;
    self.bookList = ko.observableArray([]);
    self.newBook = ko.observable();
    self.newBorrower = ko.observable();

    GetAllBooks(mapJson);

    self.newBook.subscribe(function (data) {
        PersistBook($(data).serializeObject());
        GetAllBooks(mapJson);
    });

    self.newBorrower.subscribe(function (data) {
        PersistBorrower($(data).serializeObject());

    });

    function mapJson(allData) {
    var mappedTasks = $.map(allData, function (item) { return new Book(item); });
    self.bookList(mappedTasks);
    }
}

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

