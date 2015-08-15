"use strict";

/**
 * StudentworkApp is the application which manage all the logic related to studentworkes
 */
Instanto.module("StudentworkApp", function(StudentworkApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = StudentworkApp;
	var appName = "Studentwork";
    
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
   Instanto.on("app:studentwork:showcollection", function() {
		return StudentworkApp.Controller.showCollection();
	});
	Instanto.on("app:studentwork:showcreate", function() {
		return StudentworkApp.Controller.showCreate();
	});
	Instanto.on("app:studentwork:showedit", function(id) {
		return StudentworkApp.Controller.showEdit(id);
	});
	Instanto.on("app:studentwork:showdetail", function(id) {
		return StudentworkApp.Controller.showDetail(id);
	});
	Instanto.on("app:studentwork:delete", function(id) {
		return StudentworkApp.Controller.delete(id);
	});
	Instanto.on("app:studentwork:create", function(data) {
		return StudentworkApp.Controller.create(data);
	});
	Instanto.on("app:studentwork:edit", function(id, data) {
		return StudentworkApp.Controller.edit(id, data);
	});
	Instanto.on("app:studentwork:filter", function(query) {
		return StudentworkApp.Controller.filter(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:studentwork:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:studentwork:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:studentwork:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:studentwork:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:studentwork:delete", function(id) {
		return app.API.delete(id);
	});
});
