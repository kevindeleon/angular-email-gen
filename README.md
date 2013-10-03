Angularjs Email Template Generator
==================================

This application was built for a specific department in the organization who wanted an easier way to populate their monthly HTML templates.

Using the assets.json file, we can add or subtract assets available to that department by dropping them in their appropriate folders and updating the JSON file.

The assets from the JSON file are pulled into the form.  The user can then change the template using the form and see their changes update on the fly.  The preview works relatively well, but is an approximation and not exactly how the email will look when the full code is copied.  Not all options are updateable by the user as some things are controlled by our department.  This could be made more flexible if neccessary.

Once the user is happy with their layout, they can click the "Get Code" button.  They are presented with a textarea filled with their fully functional HTML template to paste into their HTML email sender of choice.

This app is probably not useful to anyone but this specific department, but it may be of interest to someone learning AngularJS.  Feel free to take from the code what you will.

## Installation ##

Download the aeapp folder and drop it at the root of your domain.

Note: If you change the location of the application or the name of the folder you put it in, you will need to change the subfolder variables in controllers.js/MainCtrl.