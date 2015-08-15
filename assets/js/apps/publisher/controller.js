"use strict";

Instanto.module("PublisherApp", function(PublisherApp, Instanto, Backbone, Marionette, $, _){
	var app = PublisherApp;
	var appName = "Publisher";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "PublisherApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "PublisherApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "PublisherApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "PublisherApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "PublisherApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "PublisherApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "PublisherApp", id, data);
		},
		updateLogo: function(id, file) {
			Instanto.trigger("app:util:updatelogo", "PublisherApp", id , file);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		showPublicationCollection: function(id) {
			Instanto.trigger("app:util:showrelationparentcollection", "PublisherApp", id, "PublicationApp");
		},
		filterPublication: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.publication.collection, app.state.publication.collectionView);
		},
		
	};
}); 
