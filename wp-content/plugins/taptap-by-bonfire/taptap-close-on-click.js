// BEGIN HIDE MENU WHEN MENU ITEM CLICKED
jQuery('.taptap-by-bonfire ul li a').on('click', function(e) {
'use strict';
		if(jQuery('.taptap-background-color').hasClass('taptap-background-color-active'))
		{   
            /* show primary menu, hide secondary menu */
            jQuery('.taptap-logo-image').removeClass('taptap-logo-image-active');
            /* hide main wrapper */
			jQuery('.taptap-main-wrapper').removeClass('taptap-main-wrapper-active');
			/* hide background color */
			jQuery('.taptap-background-color').removeClass('taptap-background-color-active');
			/* hide background image */
			jQuery('.taptap-background-image').removeClass('taptap-background-image-active');
            /* hide background overlay */
			jQuery('.taptap-background-overlay').removeClass('taptap-background-overlay-active');
			/* hide expanded menu button */
			jQuery('.taptap-menu-button-wrapper').removeClass('taptap-menu-active');
            /* show menu button label */
            jQuery('.taptap-menu-button-label').removeClass('taptap-menu-button-label-hide');
		}
});
// END HIDE MENU WHEN MENU ITEM CLICKED