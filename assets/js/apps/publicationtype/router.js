"use strict";

Instanto.module("PublicationtypeApp", function(PublicationtypeApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.PublicationtypeApp;
	var appName = "Publicationtype";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "publicationtypees": "showCollection",
                "publicationtypees/new": "showCreate",
                "publicationtypees/:id": "showDetail",
                "publicationtypees/:id/edit": "showEdit",
                "publicationtypees/:id/primarypublicationes": "showPublicationCollection",
        },
    });
});
