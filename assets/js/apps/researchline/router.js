"use strict";

Instanto.module("ResearchlineApp", function(ResearchlineApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.ResearchlineApp;
	var appName = "Researchline";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "researchlinees": "showCollection",
                "researchlinees/new": "showCreate",
                "researchlinees/:id": "showDetail",
                "researchlinees/:id/edit": "showEdit"
        },
    });
});
