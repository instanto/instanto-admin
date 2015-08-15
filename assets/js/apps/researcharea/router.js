"use strict";

Instanto.module("ResearchareaApp", function(ResearchareaApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.ResearchareaApp;
	var appName = "Researcharea";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "researchareaes": "showCollection",
                "researchareaes/new": "showCreate",
                "researchareaes/:id": "showDetail",
                "researchareaes/:id/edit": "showEdit",
                "researchareaes/:id/primaryresearchlinees": "showResearchlinePrimaryCollection",
                "researchareaes/:id/secondaryresearchlinees": "showResearchlineSecondaryCollection",
                "researchareaes/:id/secondaryresearchlinees/add": "showResearchlineSecondaryAdd"
        },
    });
});
