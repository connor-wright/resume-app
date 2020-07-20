/* global $ */
//= require clipboard

$(document).ready(function(){
    var clipboard = new Clipboard('.email-clipboard-btn');
    console.log(clipboard);
});