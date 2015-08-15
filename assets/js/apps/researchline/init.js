"use strict";

/**
 * ResearchlineApp is the application which manage all the logic related to researchlinees
 */
Instanto.module("ResearchlineApp", function(ResearchlineApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = ResearchlineApp;
	var appName = "Researchline";
    
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
   Instanto.on("app:researchline:showcollection", function() {
		return ResearchlineApp.Controller.showCollection();
	});
	Instanto.on("app:researchline:showcreate", function() {
		return ResearchlineApp.Controller.showCreate();
	});
	Instanto.on("app:researchline:showedit", function(id) {
		return ResearchlineApp.Controller.showEdit(id);
	});
	Instanto.on("app:researchline:showdetail", function(id) {
		return ResearchlineApp.Controller.showDetail(id);
	});
	Instanto.on("app:researchline:delete", function(id) {
		return ResearchlineApp.Controller.delete(id);
	});
	Instanto.on("app:researchline:create", function(data) {
		return ResearchlineApp.Controller.create(data);
	});
	Instanto.on("app:researchline:edit", function(id, data) {
		return ResearchlineApp.Controller.edit(id, data);
	});
	Instanto.on("app:researchline:updatelogo", function(id, file) {
		return ResearchlineApp.Controller.updateLogo(id, file);
	});
	Instanto.on("app:researchline:filter", function(query) {
		return ResearchlineApp.Controller.filter(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:researchline:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:researchline:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:researchline:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:researchline:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:researchline:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:researchline:updatelogo", function(id, data) {
		return app.API.updateLogo(id, data);
	});
});
