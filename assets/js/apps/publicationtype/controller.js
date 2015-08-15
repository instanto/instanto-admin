"use strict";

Instanto.module("PublicationtypeApp", function(PublicationtypeApp, Instanto, Backbone, Marionette, $, _){
	var app = PublicationtypeApp;
	var appName = "Publicationtype";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "PublicationtypeApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "PublicationtypeApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "PublicationtypeApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "PublicationtypeApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "PublicationtypeApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "PublicationtypeApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "PublicationtypeApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		filterPublication: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.publication.collection, app.state.publication.collectionView);
		},
		showPublicationCollection: function(id) {
			Instanto.trigger("app:util:showrelationparentcollection", "PublicationtypeApp", id, "PublicationApp");
		},
	};
}); 
