"use strict";

Instanto.module("PublicationApp", function(PublicationApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.PublicationApp;
	var appName = "Publication";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "publicationes": "showCollection",
                "publicationes/new": "showCreate",
                "publicationes/:id": "showDetail",
                "publicationes/:id/edit": "showEdit"
        },
    });
});
