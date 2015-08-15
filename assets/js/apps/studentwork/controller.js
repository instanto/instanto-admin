"use strict";

Instanto.module("StudentworkApp", function(StudentworkApp, Instanto, Backbone, Marionette, $, _){
	var app = StudentworkApp;
	var appName = "Studentwork";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "StudentworkApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreatewith", "StudentworkApp", ["StudentworktypeApp", "MemberApp"]);
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetailwith", "StudentworkApp", id,[
				{appID: "StudentworktypeApp", attr: "student_work_type"},
				{appID: "MemberApp", attr: "author"},
			]);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showeditwith", "StudentworkApp", id, ["StudentworktypeApp", "MemberApp"]);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "StudentworkApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "StudentworkApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "StudentworkApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.collection, app.state.collectionView);
		}
	};
}); 
