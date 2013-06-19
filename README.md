#GA-Labels
[description]
##Usage
Add the following code inbetween your `<head>` tags: (customise UA-XXXXX-X)
 ```javascript
  <script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXX-X']);
  _gaq.push(['_trackPageview']);
  (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  </script>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
  <script type="text/javascript"src="ga-labels.js"></script>
  ```
  
##Types of Labels
 * Category     (required) data-ga-cat=""
 * Action       (required) data-ga-act=""
 * Label        (optional) data-ga-label=""
 * Value        (optional) data-ga-value=""
 * Interaction  (optional)(default: true) data-ga-int=""
 
##Adding Labels
######Link Example
```html
 <a href="/home/" class="ga-track-event" data-ga-event="link clicked" data-ga-cat="home">Home</a> 
 ```
######Download Example
```html
 <a href="/GA-Labels.pdf" class="ga-track-event" data-ga-event="Download" data-ga-cat="GA-Labels PDF" data-ga-value="5" data-ga-int="false">Download PDF</a> 
```
 
