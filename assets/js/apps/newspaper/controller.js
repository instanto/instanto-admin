"use strict";

Instanto.module("NewspaperApp", function(NewspaperApp, Instanto, Backbone, Marionette, $, _){
	var app = NewspaperApp;
	var appName = "Newspaper";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "NewspaperApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "NewspaperApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "NewspaperApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "NewspaperApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "NewspaperApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "NewspaperApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "NewspaperApp", id, data);
		},
		updateLogo: function(id, file) {
			Instanto.trigger("app:util:updatelogo", "NewspaperApp", id , file);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		showArticleCollection: function(id) {
			Instanto.trigger("app:util:showrelationparentcollection", "NewspaperApp", id, "ArticleApp");
		},
		filterArticle: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.article.collection, app.state.article.collectionView);
		},
		
	};
}); 
