$(function () {
    var div = $('.content-wrapper');
    $("ul.treeview-menu li a").on('click', function () {
        div.load($(this).data('go'),null,function(){
            
        });
    });
})