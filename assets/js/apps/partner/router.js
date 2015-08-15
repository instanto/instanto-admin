"use strict";

Instanto.module("PartnerApp", function(PartnerApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.PartnerApp;
	var appName = "Partner";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "partneres": "showCollection",
                "partneres/new": "showCreate",
                "partneres/:id": "showDetail",
                "partneres/:id/edit": "showEdit",
                "partneres/:id/memberes": "showMemberCollection",
                "partneres/:id/memberes/add": "showMemberAdd",
        },
    });
});
