"use strict";

Instanto.module("NewspaperApp", function(NewspaperApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.NewspaperApp;
	var appName = "Newspaper";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "newspaperes": "showCollection",
                "newspaperes/new": "showCreate",
                "newspaperes/:id": "showDetail",
                "newspaperes/:id/edit": "showEdit",
                "newspaperes/:id/articlees": "showArticleCollection",
        },
    });
});
