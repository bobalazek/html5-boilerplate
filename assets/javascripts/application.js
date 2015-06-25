var Application = function () {
	var initialized = false;

	return {
		initialize: function()
		{
			// Some stuff here
			jQuery(document).ready( function() {
                // Do stuff here...
                
                jQuery('#preloader').fadeOut(); // Hide preloader, when everything is ready...

                initialized = true;
                console.log('Application Initialized');
            });
		},
	}
}();
