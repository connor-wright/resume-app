$(document).ready(function(){
    var $window     = $(window);
    var $burgernav  = $('#burger-nav');
    var $navitem1   = $('#navbar-group-1');
    
    //function to perform actions when window gets resized
    function checkWidth() {
        var windowsize = $window.width();
        if(windowsize < 800){
            $navitem1.removeClass('mr-auto');
            $burgernav.removeClass('d-none');
        }
        else{
            $navitem1.addClass('mr-auto');
            $burgernav.addClass('d-none');
        }
    }
    
    //execute on load
    checkWidth();
    //Bind to event
    $(window).resize(checkWidth);
});