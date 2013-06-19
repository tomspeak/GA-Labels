$(document).on('click', '.ga-track-event', function(e) {
	var clickedElement = $(this);

	var category = clickedElement.attr('data-ga-cat');
    	var action = clickedElement.attr('data-ga-act');
    	var label = clickedElement.attr('data-ga-lab') || '';
    	var value = clickedElement.attr('data-ga-val') || '';
    	var nonInteraction = clickedElement.attr('data-ga-int');

	nonInteraction = typeof(nonInteraction) === 'undefined';
  	
	_gaq.push(['_trackEvent', category, action, label, value, nonInteraction]);

});
