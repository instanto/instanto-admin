"use strict";

Instanto.module("StudentworkApp", function(StudentworkApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.StudentworkApp;
	var appName = "Studentwork";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "studentworkes": "showCollection",
                "studentworkes/new": "showCreate",
                "studentworkes/:id": "showDetail",
                "studentworkes/:id/edit": "showEdit"
        },
    });
});
