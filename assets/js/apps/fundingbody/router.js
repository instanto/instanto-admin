"use strict";

Instanto.module("FundingbodyApp", function(FundingbodyApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.FundingbodyApp;
	var appName = "Fundingbody";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "fundingbodyes": "showCollection",
                "fundingbodyes/new": "showCreate",
                "fundingbodyes/:id": "showDetail",
                "fundingbodyes/:id/edit": "showEdit",
                "fundingbodyes/:id/primaryfinancedprojectes": "showFinancedprojectPrimaryCollection",
                "fundingbodyes/:id/secondaryfinancedprojectes": "showFinancedprojectSecondaryCollection",
                "fundingbodyes/:id/secondaryfinancedprojectes/add": "showFinancedprojectSecondaryAdd"
        },
    });
});
