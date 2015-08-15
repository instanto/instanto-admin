"use strict";

/**
 * PublicationtypeApp is the application which manage all the logic related to publicationtypees
 */
Instanto.module("PublicationtypeApp", function(PublicationtypeApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = PublicationtypeApp;
	var appName = "Publicationtype";
    
	app.state = {
		publication: {
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
   Instanto.on("app:publicationtype:showcollection", function() {
		return PublicationtypeApp.Controller.showCollection();
	});
	Instanto.on("app:publicationtype:showcreate", function() {
		return PublicationtypeApp.Controller.showCreate();
	});
	Instanto.on("app:publicationtype:showedit", function(id) {
		return PublicationtypeApp.Controller.showEdit(id);
	});
	Instanto.on("app:publicationtype:showdetail", function(id) {
		return PublicationtypeApp.Controller.showDetail(id);
	});
	Instanto.on("app:publicationtype:delete", function(id) {
		return PublicationtypeApp.Controller.delete(id);
	});
	Instanto.on("app:publicationtype:create", function(data) {
		return PublicationtypeApp.Controller.create(data);
	});
	Instanto.on("app:publicationtype:edit", function(id, data) {
		return PublicationtypeApp.Controller.edit(id, data);
	});
	Instanto.on("app:publicationtype:filter", function(query) {
		return PublicationtypeApp.Controller.filter(query);
	});
	Instanto.on("app:publicationtype:showpublicationcollection", function(id) {
		return PublicationtypeApp.Controller.showPublicationCollection(id);
	});
	Instanto.on("app:publicationtype:filterpublication", function(query) {
		return PublicationtypeApp.Controller.filterPublication(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:publicationtype:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:publicationtype:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:publicationtype:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:publicationtype:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:publicationtype:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:publicationtype:getpublicationcollection", function(id) {
		return app.API.getPublicationCollection(id);
	});
});
