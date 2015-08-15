"use strict";

Instanto.module("PublisherApp", function(PublisherApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.PublisherApp;
	var appName = "Publisher";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "publisheres": "showCollection",
                "publisheres/new": "showCreate",
                "publisheres/:id": "showDetail",
                "publisheres/:id/edit": "showEdit",
                "publisheres/:id/publicationes": "showPublicationCollection",
        },
    });
});
