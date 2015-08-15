"use strict";

Instanto.module("MemberApp", function(MemberApp, Instanto, Backbone, Marionette, $, _){
	var app = MemberApp;
	var appName = "Member";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "MemberApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreatewith", "MemberApp", ["MemberApp", "StatusApp"]);
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetailwith", "MemberApp", id, [
				{appID: "StatusApp", attr: "primary_status"},
			]);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showeditwith", "MemberApp", id, ["MemberApp", "StatusApp"]);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "MemberApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "MemberApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "MemberApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, ["first_name", "last_name"], app.state.collection, app.state.collectionView);
		}
	};
}); 
