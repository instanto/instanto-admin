"use strict";

/**
 * NewspaperApp is the application which manage all the logic related to newspaperes
 */
Instanto.module("NewspaperApp", function(NewspaperApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = NewspaperApp;
	var appName = "Newspaper";
    
	app.state = {
		article: {
			primary: {}
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
   Instanto.on("app:newspaper:showcollection", function() {
		return NewspaperApp.Controller.showCollection();
	});
	Instanto.on("app:newspaper:showcreate", function() {
		return NewspaperApp.Controller.showCreate();
	});
	Instanto.on("app:newspaper:showedit", function(id) {
		return NewspaperApp.Controller.showEdit(id);
	});
	Instanto.on("app:newspaper:showdetail", function(id) {
		return NewspaperApp.Controller.showDetail(id);
	});
	Instanto.on("app:newspaper:delete", function(id) {
		return NewspaperApp.Controller.delete(id);
	});
	Instanto.on("app:newspaper:create", function(data) {
		return NewspaperApp.Controller.create(data);
	});
	Instanto.on("app:newspaper:edit", function(id, data) {
		return NewspaperApp.Controller.edit(id, data);
	});
	Instanto.on("app:newspaper:updatelogo", function(id, file) {
		return NewspaperApp.Controller.updateLogo(id, file);
	});
	Instanto.on("app:newspaper:filter", function(query) {
		return NewspaperApp.Controller.filter(query);
	});
	Instanto.on("app:newspaper:showarticlecollection", function(id) {
		return NewspaperApp.Controller.showArticleCollection(id);
	});
	Instanto.on("app:newspaper:filterarticle", function(query) {
		return NewspaperApp.Controller.filterArticle(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:newspaper:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:newspaper:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:newspaper:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:newspaper:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:newspaper:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:newspaper:getarticlecollection", function(id) {
		return app.API.getArticleCollection(id);
	});
	Instanto.reqres.setHandler("api:newspaper:updatelogo", function(id, data) {
		return app.API.updateLogo(id, data);
	});
});
