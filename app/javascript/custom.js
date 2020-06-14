/* global $ */
//import "jQuery";


$(document).ready(function(){
    displayBurgerNavOnResize();
    adjustHeaderBufferOnBurgerNavClick();
    //bindAnchorScroll();
});

//taken from here there seeems to be an issue with turbolinks realoading the 
//page https://github.com/turbolinks/turbolinks/issues/75#issuecomment-445325162
document.addEventListener('turbolinks:click', function (event) {
  var anchorElement = event.target
  var isSamePageAnchor = (
    anchorElement.hash &&
    anchorElement.origin === window.location.origin &&
    anchorElement.pathname === window.location.pathname
  )
  
  if (isSamePageAnchor) {
    Turbolinks.controller.pushHistoryWithLocationAndRestorationIdentifier(
      event.data.url,
      Turbolinks.uuid()
    )
    event.preventDefault()
  }
});

function displayBurgerNavOnResize()
{
    var $window     = $(window);
    var $burgernav  = $('#burger-nav');
    var $navitem1   = $('#navbar-group-1');
    var $items      = $('#navbar-items');
    
    //function to perform actions when window gets resized
    function checkWidth() {
        var windowsize = $window.width();
        if(windowsize < 1000){
            $navitem1.removeClass('mr-auto');
            $burgernav.removeClass('d-none');
        }
        else{
            
            $navitem1.addClass('mr-auto');
            $burgernav.addClass('d-none');
        }
        //always collapse navitems when a resize happens
        $items.collapse('hide');
    }
    
    //execute on load
    checkWidth();
    //Bind to event
    $window.resize(checkWidth);
}
 
function adjustHeaderBufferOnBurgerNavClick()
{
    var $items = $('#navbar-items');
    var $centerContainer = $('.container-center');
    
    $items.on('shown.bs.collapse', function() {
        $centerContainer.removeClass('padding-top-70px');
        $centerContainer.addClass('padding-top-315px');
    });
    
    $items.on('hidden.bs.collapse', function() 
    {
        $centerContainer.removeClass('padding-top-315px');
        $centerContainer.addClass('padding-top-70px');
    });
}


