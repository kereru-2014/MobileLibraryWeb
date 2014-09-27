var BooksViewModel = function(){
  var self = this;
  self.bookList = ko.observableArray([]);
  self.newBook = ko.observable();

  $.getJSON("/api/v1/books/", function(data)
  {
    var initialData = ko.utils.arrayMap(data, function(book){
    return {not_fresh:true, id: book.id, title: book.title, author: book.author, ISBN: book.ISBN, image_url: book.image_url, lent_date: book.lent_date };
  });
    self.bookList(initialData);
  });

  // self.addBook = function(){
  //   self.books.push({
  //     title:"",
  //     author:"",
  //     ISBN:"",
  //     image_url:""
  //   });
  // };

  self.save = function(){
    var book = self.books()[self.books().length -1];
    var request = {book:book};


    console.log(request,book);
    $.post('/api/v1/books', request, function(data){
    });
    self.books(initialData);
  };

  $("#dialog").dialog({ autoOpen: false, draggable: false });

  $("#dialog").submit(function () {
    $(this).closest(".ui-dialog-content").dialog("close");
    return false;
  });

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

  self.newBook.subscribe(function (data) {
    console.log($(data).serializeObject());
    PersistBook($(data).serializeObject());

    // GetAllCustomers(mapJson);
  });

  self.addToBookList = function () {
      self.bookList.push(new Book("", "", ""));
  };
  function PersistBook(book) {
    $.ajax("api/v1/books", {
        data: ko.toJSON(book),
        type: "post",
        contentType: "application/json",
        success: function() {alert("Book Added Successfully")}

    });
  };
};

