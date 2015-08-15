"use strict";

Instanto.module("StatusApp", function(StatusApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.StatusApp;
	var appName = "Status";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "statuses": "showCollection",
                "statuses/new": "showCreate",
                "statuses/:id": "showDetail",
                "statuses/:id/edit": "showEdit",
                "statuses/:id/primarymemberes": "showMemberPrimaryCollection",
                "statuses/:id/secondarymemberes": "showMemberSecondaryCollection",
                "statuses/:id/secondarymemberes/add": "showMemberSecondaryAdd"
        },
    });
});