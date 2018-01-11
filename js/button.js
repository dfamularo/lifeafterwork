
var standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    ios = /iphone|ipod|ipad/.test( userAgent );

if( ios ) {
    
    if ( !standalone && safari ) {
        
        //document.getElementById( 'where-am-i' ).textContent = 'browser';
        
    } else if ( standalone && !safari ) {
        
        //document.getElementById( 'where-am-i' ).textContent = 'standalone';

        
        //Reset iFrame source
        $('#idownload').attr('src', '');

        //OPEN IFRAME IN A NEW WINDOW

        //Set iFrame source
        $('#idownload').attr('src', 'https://russellinvestments.net.au/survey/index.php?sid=58655&lang=en').attr("target","_blank");


        
    } else if ( !standalone && !safari ) {
        
        //document.getElementById( 'where-am-i' ).textContent = 'uiwebview';
        function downloadFunction() {
            //alert("form 1");
            
            //Reset iFrame source
            $('#idownload').attr('src', '');
            //Set iFrame source
            $('#idownload').attr('src', 'https://russellinvestments.net.au/survey/index.php?sid=58655&lang=en');
        }
        
        function callbackFunction() {
            //alert("form 2");
            
            //Reset iFrame source
            $('#iCallback').attr('src', '');
            //Set iFrame source
            $('#iCallback').attr('src', 'https://russellinvestments.net.au/survey/index.php?sid=16915&lang=en');
        }
        
    };
    
} else {
    
    //document.getElementById( 'where-am-i' ).textContent = 'not iOS';
    
};



      

