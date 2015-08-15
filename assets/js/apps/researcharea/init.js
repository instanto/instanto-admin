"use strict";

/**
 * ResearchareaApp is the application which manage all the logic related to researchareaes
 */
Instanto.module("ResearchareaApp", function(ResearchareaApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = ResearchareaApp;
	var appName = "Researcharea";
    
	app.state = {
		researchline: {
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
   Instanto.on("app:researcharea:showcollection", function() {
		return ResearchareaApp.Controller.showCollection();
	});
	Instanto.on("app:researcharea:showcreate", function() {
		return ResearchareaApp.Controller.showCreate();
	});
	Instanto.on("app:researcharea:showedit", function(id) {
		return ResearchareaApp.Controller.showEdit(id);
	});
	Instanto.on("app:researcharea:showdetail", function(id) {
		return ResearchareaApp.Controller.showDetail(id);
	});
	Instanto.on("app:researcharea:delete", function(id) {
		return ResearchareaApp.Controller.delete(id);
	});
	Instanto.on("app:researcharea:create", function(data) {
		return ResearchareaApp.Controller.create(data);
	});
	Instanto.on("app:researcharea:edit", function(id, data) {
		return ResearchareaApp.Controller.edit(id, data);
	});
	Instanto.on("app:researcharea:updatelogo", function(id, file) {
		return ResearchareaApp.Controller.updateLogo(id, file);
	});
	Instanto.on("app:researcharea:filter", function(query) {
		return ResearchareaApp.Controller.filter(query);
	});
	Instanto.on("app:researcharea:showresearchlineprimarycollection", function(id) {
		return ResearchareaApp.Controller.showResearchlinePrimaryCollection(id);
	});
	Instanto.on("app:researcharea:filterresearchlineprimary", function(query) {
		return ResearchareaApp.Controller.filterResearchlinePrimary(query);
	});
	Instanto.on("app:researcharea:showresearchlinesecondarycollection", function(id) {
		return ResearchareaApp.Controller.showResearchlineSecondaryCollection(id);
	});
	Instanto.on("app:researcharea:filterresearchlinesecondary", function(query) {
		return ResearchareaApp.Controller.filterResearchlineSecondary(query);
	});
	Instanto.on("app:researcharea:showresearchlinesecondaryadd", function(id) {
		return ResearchareaApp.Controller.showResearchlineSecondaryAdd(id);
	});
	Instanto.on("app:researcharea:researchlinesecondaryadd", function(id, data) {
		return ResearchareaApp.Controller.researchlineSecondaryAdd(id, data);
	});
	Instanto.on("app:researcharea:researchlinesecondaryremove", function(id, researchlineid) {
		return ResearchareaApp.Controller.researchlineSecondaryRemove(id, researchlineid);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:researcharea:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:researcharea:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:researcharea:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:researcharea:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:researcharea:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:researcharea:updatelogo", function(id, data) {
		return app.API.updateLogo(id, data);
	});
	Instanto.reqres.setHandler("api:researcharea:getresearchlineprimarycollection", function(id) {
		return app.API.getResearchlinePrimaryCollection(id);
	});
	Instanto.reqres.setHandler("api:researcharea:getresearchlinesecondarycollection", function(id) {
		return app.API.getResearchlineSecondaryCollection(id);
	});
	Instanto.reqres.setHandler("api:researcharea:researchlinesecondaryadd", function(id, data) {
		return app.API.researchlineSecondaryAdd(id, data);
	});
	Instanto.reqres.setHandler("api:researcharea:researchlinesecondaryremove", function(id, data) {
		return app.API.researchlineSecondaryRemove(id, data);
	});
});
