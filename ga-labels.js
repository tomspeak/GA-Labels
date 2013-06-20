$(function() {
    $(document.body).on('click', '.ga-track-event', function(ev) {
        var clickedElement = $(this),
            category = clickedElement.attr('data-ga-cat'),
            action = clickedElement.attr('data-ga-act'),
            label = clickedElement.attr('data-ga-lab'),
            value = clickedElement.attr('data-ga-val'),
            nonInteraction = clickedElement.attr('data-ga-int');

        if(nonInteraction === undefined) {
            nonInteraction = true;
        }

        _gaq.push(['_trackEvent', category, action, label, value, nonInteraction]);
    });
});