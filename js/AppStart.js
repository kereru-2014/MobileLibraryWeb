$(document).ready(function () {
    var addModal = $(".modalButton");
    var box = $("#box");
    var dialog = $("#dialog");

    var app = new AppRoutes(
        addModal,
        box,
        dialog
        );

    app.run_ko();
});
