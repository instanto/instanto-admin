"use strict";

Instanto.module("ArticleApp", function(ArticleApp, Instanto, Backbone, Marionette, $, _){
	var app = ArticleApp;
	var appName = "Article";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "ArticleApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreatewith", "ArticleApp", "NewspaperApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetailwith", "ArticleApp", id, {appID: "NewspaperApp", attr: "newspaper"});
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showeditwith", "ArticleApp", id, "NewspaperApp");
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "ArticleApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "ArticleApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "ArticleApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.collection, app.state.collectionView);
		}
	};
}); 
