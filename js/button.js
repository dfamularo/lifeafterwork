
var urldownload = "https://russellinvestments.net.au/survey/index.php?sid=58655&lang=en",
    urlcallback = "https://russellinvestments.net.au/survey/index.php?sid=16915&lang=en",
    // Get the user agent string
    deviceAgent = navigator.userAgent,
    // Set var to iOS device name or null
    ios = deviceAgent.toLowerCase().match(/(iphone|ipod|ipad)/);


// EVENT HANDLERS
function downloadFunction() {
    //alert("form 1");
    if (ios) {
        // This is the line that matters
        //alert("iPhone detected");
        $('#idownload').attr("disabled", "disabled");

        var downloadNewWindow = window.open(urldownload,"Download","location=yes,menubar=yes");

        //$(this).attr('href', urldownload);
    } else {
        // Your code that works for desktop browsers
        //Reset iFrame source
        $('#idownload').attr('src', '');
        //Set iFrame source
        $('#idownload').attr('src', 'https://russellinvestments.net.au/survey/index.php?sid=58655&lang=en');
    }    
}

function callbackFunction() {
    //alert("form 2");
    if (ios) {
        // This is the line that matters
        //alert("iPhone detected");
        $('#iCallback').attr("disabled", "disabled");

        var callbackNewWindow = window.open(urlcallback,"Callback","location=yes,menubar=yes");

        //$(this).attr('href', urlcallback);
    } else {
        // Your code that works for desktop browsers
        //Reset iFrame source
        $('#iCallback').attr('src', '');
        //Set iFrame source
        $('#iCallback').attr('src', 'https://russellinvestments.net.au/survey/index.php?sid=16915&lang=en');
    } 
}


