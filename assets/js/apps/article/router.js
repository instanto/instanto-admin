"use strict";

Instanto.module("ArticleApp", function(ArticleApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.ArticleApp;
	var appName = "Article";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "articlees": "showCollection",
                "articlees/new": "showCreate",
                "articlees/:id": "showDetail",
                "articlees/:id/edit": "showEdit"
        },
    });
});
