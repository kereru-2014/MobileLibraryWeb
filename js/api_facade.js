//put you api facade code in here

// Load initial state from server, convert it to Task instances, then populate self.tasks
function GetAllCustomers(callback) {
    $.getJSON("api/Customers", function (data) { callback(data); });
};

function SearchCustomers(parameter, callback) {
    $.getJSON("api/customers/search/" + parameter, function (data) { callback(data); });
};

function AddCustomer(customer) {
    $.ajax("api/customers", {
        data: ko.toJSON(customer),
        type: "post",
        contentType: "application/json",
        success: function() {}
        //success: function() { alert("User Added Successfully"); }
    });
};

function DeleteCustomers(parameter) {
    $.ajax({
        url: "api/customers/" + parameter,
        type: 'DELETE'
    });
};
