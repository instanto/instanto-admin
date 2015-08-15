"use strict";

Instanto.module("ResearchlineApp", function(ResearchlineApp, Instanto, Backbone, Marionette, $, _){
	var app = ResearchlineApp;
	var appName = "Researchline";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "ResearchlineApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreatewith", "ResearchlineApp", ["ResearchareaApp"]);
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetailwith", "ResearchlineApp", id, [
				{appID: "ResearchareaApp", attr: "primary_research_area"}
			]);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showeditwith", "ResearchlineApp", id, ["ResearchareaApp"]);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "ResearchlineApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "ResearchlineApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "ResearchlineApp", id, data);
		},
		updateLogo: function(id, file) {
			Instanto.trigger("app:util:updatelogo", "ResearchlineApp", id , file);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.collection, app.state.collectionView);
		}
	};
}); 
