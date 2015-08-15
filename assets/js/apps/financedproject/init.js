"use strict";

/**
 * FinancedprojectApp is the application which manage all the logic related to financedprojectes
 */
Instanto.module("FinancedprojectApp", function(FinancedprojectApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = FinancedprojectApp;
	var appName = "Financedproject";
    
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
   Instanto.on("app:financedproject:showcollection", function() {
		return FinancedprojectApp.Controller.showCollection();
	});
	Instanto.on("app:financedproject:showcreate", function() {
		return FinancedprojectApp.Controller.showCreate();
	});
	Instanto.on("app:financedproject:showedit", function(id) {
		return FinancedprojectApp.Controller.showEdit(id);
	});
	Instanto.on("app:financedproject:showdetail", function(id) {
		return FinancedprojectApp.Controller.showDetail(id);
	});
	Instanto.on("app:financedproject:delete", function(id) {
		return FinancedprojectApp.Controller.delete(id);
	});
	Instanto.on("app:financedproject:create", function(data) {
		return FinancedprojectApp.Controller.create(data);
	});
	Instanto.on("app:financedproject:edit", function(id, data) {
		return FinancedprojectApp.Controller.edit(id, data);
	});
	Instanto.on("app:financedproject:filter", function(query) {
		return FinancedprojectApp.Controller.filter(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:financedproject:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:financedproject:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:financedproject:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:financedproject:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:financedproject:delete", function(id) {
		return app.API.delete(id);
	});
});
