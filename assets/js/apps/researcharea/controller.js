"use strict";

Instanto.module("ResearchareaApp", function(ResearchareaApp, Instanto, Backbone, Marionette, $, _){
	var app = ResearchareaApp;
	var appName = "Researcharea";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "ResearchareaApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "ResearchareaApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "ResearchareaApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "ResearchareaApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "ResearchareaApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "ResearchareaApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "ResearchareaApp", id, data);
		},
		updateLogo: function(id, file) {
			Instanto.trigger("app:util:updatelogo", "ResearchareaApp", id , file);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		filterResearchlinePrimary: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.researchline.primary.collection, app.state.researchline.primary.collectionView);
		},
		filterResearchlineSecondary: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.researchline.secondary.collection, app.state.researchline.secondary.collectionView);
		},
		showResearchlinePrimaryCollection: function(id) {
			Instanto.trigger("app:util:showrelationprimarycollection", "ResearchareaApp", id, "ResearchlineApp");
		},
		showResearchlineSecondaryCollection: function(id) {
			Instanto.trigger("app:util:showrelationsecondarycollection", "ResearchareaApp", id, "ResearchlineApp");
		},
		showResearchlineSecondaryAdd: function(id) {
			Instanto.trigger("app:util:showrelationsecondaryadd", "ResearchareaApp", id, "ResearchlineApp");
		},
		researchlineSecondaryAdd: function(id, data) {
			Instanto.trigger("app:util:relationsecondaryadd", "ResearchareaApp", id, "ResearchlineApp", data, {prettyNameAssoc: "Financed project", attrAssoc: "financed_project"});
		},
		researchlineSecondaryRemove: function(id, data) {
			Instanto.trigger("app:util:relationsecondaryremove", "ResearchareaApp", id, "ResearchlineApp", data, {prettyName: "Research area", prettyNameAssoc: "Financed project", attrAssoc: "financed_project"});
		}
	};
}); 
