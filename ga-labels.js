$(document).click(function(e) {
	var clickedElement = $(e.target);

	if(clickedElement.hasClass('ga-track-event')) {

		var category = clickedElement.attr('data-ga-cat');
    		var action = clickedElement.attr('data-ga-act');
    		var label = clickedElement.attr('data-ga-lab');
    		var value = clickedElement.attr('data-ga-val');
    		var nonInteraction = clickedElement.attr('data-ga-int');

    		if(typeof(nonInteraction) === 'undefined') { var nonInteraction = true; }// DEFAULT TRUE = ignore the bounce rate calculation.

	    	if(label && value) {
	    		_gaq.push(['_trackEvent', category, action, label, value, nonInteraction]);
	    	} else if(label) {
	    		_gaq.push(['_trackEvent', category, action, label, '', nonInteraction]);
	    	} else if(value) {
	    		_gaq.push(['_trackEvent', category, action, '', value, nonInteraction]);
	    	} else { 
	    		_gaq.push(['_trackEvent', category, action, '', '', nonInteraction]);
	    	}
	}
});
