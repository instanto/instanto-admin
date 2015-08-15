"use strict";

Instanto.module("StudentworktypeApp", function(StudentworktypeApp, Instanto, Backbone, Marionette, $, _) {
    var app = Instanto.StudentworktypeApp;
	var appName = "Studentworktype";
    
    
	app.Router = Marionette.AppRouter.extend({
        appRoutes: {
                "studentworktypees": "showCollection",
                "studentworktypees/new": "showCreate",
                "studentworktypees/:id": "showDetail",
                "studentworktypees/:id/edit": "showEdit",
                "studentworktypees/:id/primarystudentworkes": "showStudentworkCollection",
        },
    });
});
