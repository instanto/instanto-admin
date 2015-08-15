"use strict"

/**
 * Enhance some prototypes
 */

/**
 * Provide capitalization of first letter
 */
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};


window.Instanto = new Marionette.Application();

Instanto.config = {
	baseURL: "/",
	rootURLForAPI: "/api/",
	rootURLForMedia: "/api/media/",
	logoMaxSize: 2*1024*1024, // The max filesize of logos is by default 2MB
};

Instanto.navigate = function(route, options) {
	options = options || {};
	Backbone.history.navigate(route, options);
};

Instanto.getCurrentRoute = function() {
	return Backbone.history.fragment;
};

Instanto.addRegions({
	main: "#main"
});

Instanto.on("start", function() {
	Instanto.IntroApp.start();
});

$(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
	// In each error we should remove the global dimmer and redirect to main page
	if(jqxhr.status === 401) {
		//Instanto.HeaderApp.Controller.logout();
		localStorage.removeItem("auth_token");
		window.location.reload();
	} else if(jqxhr.status === 415) {
		Instanto.trigger("app:notification:create", "error", "Bad JSON", "The JSON payload you are sending is invalid")
	} else if(jqxhr.status === 500) {
		Instanto.trigger("app:notification:create", "error", "Internal server error", "A really bad error happened. Plase, contact the system administrator")
	} else {
		//Instanto.trigger("app:notification:create", "error", "Unexpected error", "This error must have been caught by app logic")
		// here should be errors like 400, 404 
		//console.log(jqxhr.status)
	}
});
