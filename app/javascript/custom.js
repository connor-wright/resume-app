$(document).ready(function(){
    var $window     = $(window);
    var $burgernav  = $('#burger-nav');
    
    //function to perform actions when window gets resized
    function checkWidth() {
        var windowsize = $window.width();
        if(windowsize < 800){
            $burgernav.removeClass('d-none');
        }
        else{
            $burgernav.addClass('d-none');
        }
    }
    
    //execute on load
    checkWidth();
    //Bind to event
    $(window).resize(checkWidth);
});