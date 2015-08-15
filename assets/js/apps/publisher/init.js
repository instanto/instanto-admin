"use strict";

/**
 * PublisherApp is the application which manage all the logic related to publisheres
 */
Instanto.module("PublisherApp", function(PublisherApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = PublisherApp;
	var appName = "Publisher";
    
	app.state = {
		publication: {
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
   Instanto.on("app:publisher:showcollection", function() {
		return PublisherApp.Controller.showCollection();
	});
	Instanto.on("app:publisher:showcreate", function() {
		return PublisherApp.Controller.showCreate();
	});
	Instanto.on("app:publisher:showedit", function(id) {
		return PublisherApp.Controller.showEdit(id);
	});
	Instanto.on("app:publisher:showdetail", function(id) {
		return PublisherApp.Controller.showDetail(id);
	});
	Instanto.on("app:publisher:delete", function(id) {
		return PublisherApp.Controller.delete(id);
	});
	Instanto.on("app:publisher:create", function(data) {
		return PublisherApp.Controller.create(data);
	});
	Instanto.on("app:publisher:edit", function(id, data) {
		return PublisherApp.Controller.edit(id, data);
	});
	Instanto.on("app:publisher:updatelogo", function(id, file) {
		return PublisherApp.Controller.updateLogo(id, file);
	});
	Instanto.on("app:publisher:filter", function(query) {
		return PublisherApp.Controller.filter(query);
	});
	Instanto.on("app:publisher:showpublicationcollection", function(id) {
		return PublisherApp.Controller.showPublicationCollection(id);
	});
	Instanto.on("app:publisher:filterpublication", function(query) {
		return PublisherApp.Controller.filterPublication(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:publisher:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:publisher:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:publisher:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:publisher:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:publisher:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:publisher:getpublicationcollection", function(id) {
		return app.API.getPublicationCollection(id);
	});
	Instanto.reqres.setHandler("api:publisher:updatelogo", function(id, data) {
		return app.API.updateLogo(id, data);
	});
});
