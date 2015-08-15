"use strict";

Instanto.module("FinancedprojectApp", function(FinancedprojectApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.FinancedprojectApp;
	var appName = "Financedproject";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "financedprojectes": "showCollection",
                "financedprojectes/new": "showCreate",
                "financedprojectes/:id": "showDetail",
                "financedprojectes/:id/edit": "showEdit"
        },
    });
});
