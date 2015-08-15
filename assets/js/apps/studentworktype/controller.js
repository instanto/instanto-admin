"use strict";

Instanto.module("StudentworktypeApp", function(StudentworktypeApp, Instanto, Backbone, Marionette, $, _){
	var app = StudentworktypeApp;
	var appName = "Studentworktype";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "StudentworktypeApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "StudentworktypeApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "StudentworktypeApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "StudentworktypeApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "StudentworktypeApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "StudentworktypeApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "StudentworktypeApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		filterStudentwork: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.studentwork.collection, app.state.studentwork.collectionView);
		},
		showStudentworkCollection: function(id) {
			Instanto.trigger("app:util:showrelationparentcollection", "StudentworktypeApp", id, "StudentworkApp");
		},
	};
}); 
