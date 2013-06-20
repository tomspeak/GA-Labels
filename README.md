#GA-Labels

Add ga-labels.js to your project so that you can easily track events and send them to Google Analytics. You can fully customise what is tracked and how it is tracked. You will set categories, actions and labels yourself allowing to set up what ever tracking neccesary for your website i.e clicks/downloads.

##Usage
Add the following code inbetween your `<head>` tags: (customise UA-XXXXX-X)

Add ``` class="ga-track-event" ``` to all elements you want tracked.
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
 * Category     (string)(required) ``` data-ga-cat="" ```
 * Action       (string)(required) ``` data-ga-act="" ```
 * Label        (string)(optional) ``` data-ga-lab="" ```
 * Value        (int) (optional) ``` data-ga-val="" ```
 * Interaction  (boolean) (optional)(default: true) ``` data-ga-int="" ```
 
##Adding Labels
######Link Example
```html
 <a href="/home/" class="ga-track-event" data-ga-event="link clicked" data-ga-cat="home">Home</a> 
 ```
######Download Example
```html
 <a href="/GA-Labels.pdf" class="ga-track-event" data-ga-event="Download" data-ga-cat="GA-Labels PDF" data-ga-value="5" data-ga-int="false">Download PDF</a> 
```
 
