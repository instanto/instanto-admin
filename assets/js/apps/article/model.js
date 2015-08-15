"use strict";

Instanto.module("ArticleApp", function(ArticleApp, Instanto, Backbone, Marionette, $, _){
	var app = ArticleApp;
	var appName = "Article";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
