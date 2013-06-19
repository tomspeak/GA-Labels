/* @TODO
		- add attachEvent
		- implement universal analytics
	*/
var doc = document.documentElement;

if(doc.addEventListener) {

	doc.addEventListener('click', function (e) {
	    if (e.target.classList.contains('ga-track-event')) {
	    	var category = e.target.getAttribute('data-ga-cat');
	    	var action = e.target.getAttribute('data-ga-act');
	    	var label = e.target.getAttribute('data-ga-lab');
		
	    	if(label) {
	    		_gaq.push(['_trackEvent', category, action, label]);
	    	} else { 
	    		_gaq.push(['_trackEvent', category, action]);
	    	}
	    } 
	});
} else if(doc.attachEvent) {
	doc.attachEvent()
} else {
	console.log("old as hell bru");
}