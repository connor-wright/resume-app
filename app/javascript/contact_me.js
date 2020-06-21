/*global $*/
$(document).ready(function(){
    $("#modal-window").find(".modal-content").html("<%= render 'layouts/mainpage/about_me' %>");
    $("#modal-window").modal();
});