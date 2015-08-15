"use strict";

Instanto.module("MemberApp", function(MemberApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.MemberApp;
	var appName = "Member";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "memberes": "showCollection",
                "memberes/new": "showCreate",
                "memberes/:id": "showDetail",
                "memberes/:id/edit": "showEdit"
        },
    });
});
