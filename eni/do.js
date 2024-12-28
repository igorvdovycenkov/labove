   // Get the current URL
   var currentUrl = window.location.href;

   // Append a query parameter to the URL
   var newUrl = currentUrl + '?param=value';

   // Update the URL without reloading the page
   window.history.pushState({}, '', newUrl);
   