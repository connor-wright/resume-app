/* global $ */

$(document).ready(function(){
    //Hook up event handlers
    onResize();
    onBurgerNavClick();
    onAnchorLinkClick();
});

//taken from here there seeems to be an issue with turbolinks realoading the 
//page https://github.com/turbolinks/turbolinks/issues/75#issuecomment-445325162
document.addEventListener('turbolinks:click', function (event) {
  var anchorElement = event.target;
  var isSamePageAnchor = (
    anchorElement.hash &&
    anchorElement.origin === window.location.origin &&
    anchorElement.pathname === window.location.pathname
  );
  
  if (isSamePageAnchor) {
    Turbolinks.controller.pushHistoryWithLocationAndRestorationIdentifier(
      event.data.url,
      Turbolinks.uuid()
    );
    event.preventDefault();
  }
});

function belowWindowThreashold()
{
    if($(window).width() < 1000) {return true;}
    return false;
}

function onResize()
{
    var $window     = $(window);
    var $burgernav  = $('#burger-nav');
    var $navitem1   = $('#navbar-group-1');
    var $items      = $('#navbar-items');
    var $centerContainer = $('.container-center');
    
    //function to perform actions when window gets resized
    function checkWidth() {
        var windowsize = $window.width();
        if(belowWindowThreashold()){
            $navitem1.removeClass('mr-auto');
            $burgernav.removeClass('d-none');
            //$('html').css('scroll-padding', '20px')
            //$centerContainer
              //  .removeClass('padding-top-70px').addClass('padding-top-20px');
            //$('anchor').removeClass('anchor').addClass('anchor-mobile');
        }
        else{
            $navitem1.addClass('mr-auto');
            $burgernav.addClass('d-none');
            //$('anchor-mobile')
            //    .removeClass('anchor-mobile').addClass('anchor');
        }
        //always collapse navitems when a resize happens
        $items.collapse('hide');
    }
    
    //execute on load
    checkWidth();
    //Bind to window reasize
    $window.resize(checkWidth);
}
 
function onBurgerNavClick()
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


function onAnchorLinkClick()
{
    var $items = $('#navbar-items');
    var preventDefault = true;
    var $anchorLink = null;
    
    function clickAnchorAfterColapse()
    {
        //refire after nav has colapsed
        if($anchorLink)
        {
            $anchorLink[0].click();
            preventDefault = true;
            $anchorLink = null;
        }
    }
    
    $items.on('hidden.bs.collapse', clickAnchorAfterColapse);
    
    $(".anchor").click(function(event)
    { 
        if(belowWindowThreashold() && $items.is(':visible'))
        {
            if(preventDefault)
            {
                event.preventDefault();
                $anchorLink = $(this);
                preventDefault = false;
                $items.collapse('hide');
            }
            
        }
    });
}

