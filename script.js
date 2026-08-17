(function(){
    var n = 220;
    var shadows = [];
    for (var i = 0; i < n; i++){
      var x = (Math.random()*100).toFixed(2);
      var y = (Math.random()*100).toFixed(2);
      var r = Math.random();
      var alpha = (0.3 + Math.random()*0.55).toFixed(2);
      var spread = r > 0.92 ? '1px' : '0px';
      shadows.push(x+'vw '+y+'vh 0 '+spread+' rgba(255,255,255,'+alpha+')');
    }
    document.documentElement.style.setProperty('--stars', shadows.join(','));
  })();

  function displayCurrentTime(){
    var now = new Date();
    var opts = { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true };
    var el = document.getElementById('localTime');
    if (el) el.textContent = now.toLocaleTimeString('en-US', opts);
  }
  setInterval(displayCurrentTime, 1000);
  displayCurrentTime();

// Popover / lightbox behavior for figures
(function(){
  var backdrop = null;
  var activePopover = null;
  var lastFocused = null;

  function createBackdrop(){
    backdrop = document.createElement('div');
    backdrop.className = 'popover-backdrop';
    backdrop.tabIndex = -1;
    backdrop.addEventListener('click', hideActive);
    return backdrop;
  }

  function showPopoverById(id){
    var pop = document.getElementById(id);
    if(!pop) return;
    lastFocused = document.activeElement;
    pop.setAttribute('open','');
    activePopover = pop;
    if(!backdrop) createBackdrop();
    document.body.appendChild(backdrop);
    // focus close button if present
    var close = pop.querySelector('[popovertargetaction="hide"], .popover-close');
    if(close) close.focus();
    document.addEventListener('keydown', onKeyDown);
  }

  function hideActive(){
    if(!activePopover) return;
    activePopover.removeAttribute('open');
    if(backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
    document.removeEventListener('keydown', onKeyDown);
    if(lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    activePopover = null;
    lastFocused = null;
  }

  function onKeyDown(e){
    if(e.key === 'Escape') hideActive();
    if(e.key === 'Tab' && activePopover){
      // simple focus trap: keep focus inside activePopover
      var focusables = activePopover.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
      if(focusables.length === 0) return;
      var first = focusables[0];
      var last = focusables[focusables.length-1];
      if(e.shiftKey && document.activeElement === first){
        e.preventDefault(); last.focus();
      } else if(!e.shiftKey && document.activeElement === last){
        e.preventDefault(); first.focus();
      }
    }
  }

  // delegate clicks on elements that open/close popovers
  document.addEventListener('click', function(e){
    var t = e.target;
    // walk up to find a control with popovertarget
    while(t && t !== document.documentElement){
      if(t.hasAttribute && t.hasAttribute('popovertarget')){
        var target = t.getAttribute('popovertarget');
        var action = t.getAttribute('popovertargetaction') || 'show';
        if(action === 'hide'){
          hideActive();
        } else {
          showPopoverById(target);
        }
        return;
      }
      t = t.parentNode;
    }
  }, false);

  // handle close buttons inside popovers that have the popovertargetattribute
  document.addEventListener('click', function(e){
    var t = e.target;
    if(t && t.matches && (t.matches('.popover-close') || (t.hasAttribute && t.getAttribute('popovertargetaction') === 'hide'))){
      hideActive();
    }
  }, false);
})();
