$(function () {
    var div = $('.content-wrapper');
    $("ul.treeview-menu li a").on('click', function () {
        $.get($(this).data('go'), function (result) {
            div.html(result);
        });
    });
})