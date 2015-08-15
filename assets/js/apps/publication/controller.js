"use strict";

Instanto.module("PublicationApp", function(PublicationApp, Instanto, Backbone, Marionette, $, _){
	var app = PublicationApp;
	var appName = "Publication";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "PublicationApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreatewith", "PublicationApp", ["PublicationtypeApp", "MemberApp", "PublisherApp"]);
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetailwith", "PublicationApp", id,[
				{appID: "PublicationtypeApp", attr: "publication_type"},
				{appID: "MemberApp", attr: "primary_author"},
				{appID: "PublisherApp", attr: "publisher"},
			]);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showeditwith", "PublicationApp", id, ["PublicationtypeApp", "MemberApp", "PublisherApp"]);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "PublicationApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "PublicationApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "PublicationApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.collection, app.state.collectionView);
		}
	};
}); 
