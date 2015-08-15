"use strict";

/**
 * ArticleApp is the application which manage all the logic related to articlees
 */
Instanto.module("ArticleApp", function(ArticleApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = ArticleApp;
	var appName = "Article";
    
	app.state = {
		member: {
			primary: {},
			secondary: {}
		}	
	};
	
	Instanto.ContainerApp.on("start", function() {
		Instanto.addInitializer(function() {
	        new app.Router({
	                controller: app.Controller
	        });
		});
	});
	
   /**
	* Actions
    */
   Instanto.on("app:article:showcollection", function() {
		return ArticleApp.Controller.showCollection();
	});
	Instanto.on("app:article:showcreate", function() {
		return ArticleApp.Controller.showCreate();
	});
	Instanto.on("app:article:showedit", function(id) {
		return ArticleApp.Controller.showEdit(id);
	});
	Instanto.on("app:article:showdetail", function(id) {
		return ArticleApp.Controller.showDetail(id);
	});
	Instanto.on("app:article:delete", function(id) {
		return ArticleApp.Controller.delete(id);
	});
	Instanto.on("app:article:create", function(data) {
		return ArticleApp.Controller.create(data);
	});
	Instanto.on("app:article:edit", function(id, data) {
		return ArticleApp.Controller.edit(id, data);
	});
	Instanto.on("app:article:filter", function(query) {
		return ArticleApp.Controller.filter(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:article:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:article:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:article:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:article:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:article:delete", function(id) {
		return app.API.delete(id);
	});
});
