"use strict";

/**
 * StudentworktypeApp is the application which manage all the logic related to studentworktypees
 */
Instanto.module("StudentworktypeApp", function(StudentworktypeApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = StudentworktypeApp;
	var appName = "Studentworktype";
    
	app.state = {
		studentwork: {
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
   Instanto.on("app:studentworktype:showcollection", function() {
		return StudentworktypeApp.Controller.showCollection();
	});
	Instanto.on("app:studentworktype:showcreate", function() {
		return StudentworktypeApp.Controller.showCreate();
	});
	Instanto.on("app:studentworktype:showedit", function(id) {
		return StudentworktypeApp.Controller.showEdit(id);
	});
	Instanto.on("app:studentworktype:showdetail", function(id) {
		return StudentworktypeApp.Controller.showDetail(id);
	});
	Instanto.on("app:studentworktype:delete", function(id) {
		return StudentworktypeApp.Controller.delete(id);
	});
	Instanto.on("app:studentworktype:create", function(data) {
		return StudentworktypeApp.Controller.create(data);
	});
	Instanto.on("app:studentworktype:edit", function(id, data) {
		return StudentworktypeApp.Controller.edit(id, data);
	});
	Instanto.on("app:studentworktype:filter", function(query) {
		return StudentworktypeApp.Controller.filter(query);
	});
	Instanto.on("app:studentworktype:showstudentworkcollection", function(id) {
		return StudentworktypeApp.Controller.showStudentworkCollection(id);
	});
	Instanto.on("app:studentworktype:filterstudentwork", function(query) {
		return StudentworktypeApp.Controller.filterStudentwork(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:studentworktype:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:studentworktype:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:studentworktype:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:studentworktype:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:studentworktype:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:studentworktype:getstudentworkcollection", function(id) {
		return app.API.getStudentworkCollection(id);
	});
});
