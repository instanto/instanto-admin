"use strict";

/**
 * MemberApp is the application which manage all the logic related to memberes
 */
Instanto.module("MemberApp", function(MemberApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = MemberApp;
	var appName = "Member";
    
	app.state = {
		status: {
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
   Instanto.on("app:member:showcollection", function() {
		return MemberApp.Controller.showCollection();
	});
	Instanto.on("app:member:showcreate", function() {
		return MemberApp.Controller.showCreate();
	});
	Instanto.on("app:member:showedit", function(id) {
		return MemberApp.Controller.showEdit(id);
	});
	Instanto.on("app:member:showdetail", function(id) {
		return MemberApp.Controller.showDetail(id);
	});
	Instanto.on("app:member:delete", function(id) {
		return MemberApp.Controller.delete(id);
	});
	Instanto.on("app:member:create", function(data) {
		return MemberApp.Controller.create(data);
	});
	Instanto.on("app:member:edit", function(id, data) {
		return MemberApp.Controller.edit(id, data);
	});
	Instanto.on("app:member:filter", function(query) {
		return MemberApp.Controller.filter(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:member:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:member:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:member:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:member:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:member:delete", function(id) {
		return app.API.delete(id);
	});
});
