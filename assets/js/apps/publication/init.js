"use strict";

/**
 * PublicationApp is the application which manage all the logic related to publicationes
 */
Instanto.module("PublicationApp", function(PublicationApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = PublicationApp;
	var appName = "Publication";
    
	app.state = {
		researchline: {
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
   Instanto.on("app:publication:showcollection", function() {
		return PublicationApp.Controller.showCollection();
	});
	Instanto.on("app:publication:showcreate", function() {
		return PublicationApp.Controller.showCreate();
	});
	Instanto.on("app:publication:showedit", function(id) {
		return PublicationApp.Controller.showEdit(id);
	});
	Instanto.on("app:publication:showdetail", function(id) {
		return PublicationApp.Controller.showDetail(id);
	});
	Instanto.on("app:publication:delete", function(id) {
		return PublicationApp.Controller.delete(id);
	});
	Instanto.on("app:publication:create", function(data) {
		return PublicationApp.Controller.create(data);
	});
	Instanto.on("app:publication:edit", function(id, data) {
		return PublicationApp.Controller.edit(id, data);
	});
	Instanto.on("app:publication:filter", function(query) {
		return PublicationApp.Controller.filter(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:publication:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:publication:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:publication:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:publication:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:publication:delete", function(id) {
		return app.API.delete(id);
	});
});
