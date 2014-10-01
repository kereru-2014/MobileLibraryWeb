// Class to represent a book
function Book(data) {
    var self = this;
    self.id = ko.observable(data.id);
    self.title = ko.observable(data.title);
    self.author = ko.observable(data.author);
    self.ISBN = ko.observable(data.ISBN);
    self.google_isbn = ko.observable(data.isbn);
    self.image_url = ko.observable(data.image_url || data.thumbnail);
    self.lent_date = ko.observable(data.lent_date);
    self.reminder_date = ko.observable(data.reminder_date);
    self.borrower_id = ko.observable(data.borrower_id);
    self.user_id = ko.observable(data.user_id);
}

function Borrower(data) {
    var self = this;
    self.id = ko.observable(data.id);
    self.name = ko.observable(data.name);
    self.email = ko.observable(data.email);
    self.phone_number = ko.observable(data.phone_number);
    self.user_id = ko.observable(data.user_id);
 }


function HomeViewModel() {
    var self = this;
    self.bookList = ko.observableArray([]);
    self.lendOptionsArray = ko.observableArray([1,2,3,4]);
    self.lendOptionsValue = ko.pureComputed(function(){return self.lendOptionsArray()});
    self.newBook = ko.observable();
    self.newBorrower = ko.observable();
    self.lendToBorrower = ko.observable();
    self.returnABook = ko.observable();
    self.borrowerList = ko.observableArray([]);
    self.selectedBorrower = ko.observable();
    self.searchForBook = ko.observable();
    self.renderGoogleJson = ko.observable();
    self.addGoogleBook = ko.observable();

    setUpSubscribing();
    GetAllBooks(mapJson);
    GetAllBorrowers(mapBorrowerJson);

    function setUpSubscribing(){
        self.lendToBorrower.subscribe(lendBook);
        self.returnABook.subscribe(persistReturnAndRefreshBook);

        self.newBook.subscribe(persistNewAndRefreshBook);
        self.addGoogleBook.subscribe(persistGoogleAndRefreshBook);
        self.newBorrower.subscribe(persistNewBorrowerAndRefresh);
        self.searchForBook.subscribe(googleSearch);
    }

    self.bookToDelete = function(){
        var result = confirm("Please confirm that you wish to delete '" + this.title() + "'?");
        if (result==true) {
            DeleteBook(this.id());
        }
        GetAllBooks(mapJson);
    };

    self.bookToLend = function(){
        var bookJson = ko.toJSON(this);
        var obj = jQuery.parseJSON(bookJson);
        $("#lend_id").val(obj.id);
        $(".lend_title").html(obj.title);
        $(".lend_author").html(obj.author);
        $("#lend_isbn").val(obj.ISBN);
        $("#lend_imgurl").val(obj.image_url);
        $("#lend_borrower_id").val(obj.borrower_id);
        $("#lend_img").attr("src", obj.image_url);
        $("#return_id").val(obj.id);
        $(".return_title").html(obj.title);
        $(".return_author").html(obj.author);
        $("#return_borrower_id").html(obj.borrower_id);
        $("#return_img").attr("src", obj.image_url);
    };

     self.processGoogleBook = function(){
        var bookJson = ko.toJSON(this);
        var obj = jQuery.parseJSON(bookJson);
        $(".google_title").val(obj.title);
        $(".google_author").val(obj.author);
        $(".google_isbn").val(obj.google_isbn[0]["identifier"]);
        $(".google_image").val(obj.image_url);
    };

    function mapBorrowerJson(allData) {
    var mappedTasks = $.map(allData, function (item) { return new Borrower(item); });
    var dropdownlist = CreateLenderList(mappedTasks);
       self.borrowerList(dropdownlist);
    };

    function mapSearchJson(allData){
        var mappedTasks = $.map(allData, function (item) { return new Book(item);});
        self.renderGoogleJson(mappedTasks);
    };
    function lendBook(data){
        var reminderDate = $(data).serializeObject();
        reminderDate.reminder_date.to
        ApiLendBook(reminderDate)
        GetAllBooks(mapJson);
    };

    function mapJson(allData) {
        var mappedTasks = $.map(allData, function (item) { return new Book(item);});
        self.bookList(mappedTasks);
    }

    function persistReturnAndRefreshBook(data){
        ApiReturnBook($(data).serializeObject());
        GetAllBooks(mapJson);
    }

    function persistNewAndRefreshBook(data) {
        PersistBook($(data).serializeObject());
        GetAllBooks(mapJson);
    }

    function persistGoogleAndRefreshBook(data) {
        PersistBook($(data).serializeObject());
        GetAllBooks(mapJson);
    }

    function persistNewBorrowerAndRefresh(data) {
        PersistBorrower($(data).serializeObject());
        GetAllBorrowers(mapBorrowerJson);
    }
    function googleSearch(data){
        ApiGoogleBooksSearch($(data).serializeObject(),mapSearchJson);
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

var ClearAddBookModal = function(){
    $( "#modalAddTitle").val("");
    $( "#modalAddAuthor" ).val("");
    $( "#modalAddISBN").val("");
    $( "#modalAddimage_url" ).val("");
};

var ClearBorrowerModal = function(){
    $( "#modalBorrowerName").val("");
    $( "#modalBorrowerEmail" ).val("");
    $( "#modalBorrowerPhone_number" ).val("");
};

function CreateLenderList(mappedTasks) {
    var arrayLength = mappedTasks.length;
    var dropdownlist = [];
    for (var i = 0; i < arrayLength; i++) {
         dropdownlist.push({ name: $(mappedTasks)[i].name(), id: $(mappedTasks)[i].id() });
        };
    return dropdownlist;
    };



