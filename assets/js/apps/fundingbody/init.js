"use strict";

/**
 * FundingbodyApp is the application which manage all the logic related to fundingbodyes
 */
Instanto.module("FundingbodyApp", function(FundingbodyApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = FundingbodyApp;
	var appName = "Fundingbody";
    
	app.state = {
		financedproject: {
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
   Instanto.on("app:fundingbody:showcollection", function() {
		return FundingbodyApp.Controller.showCollection();
	});
	Instanto.on("app:fundingbody:showcreate", function() {
		return FundingbodyApp.Controller.showCreate();
	});
	Instanto.on("app:fundingbody:showedit", function(id) {
		return FundingbodyApp.Controller.showEdit(id);
	});
	Instanto.on("app:fundingbody:showdetail", function(id) {
		return FundingbodyApp.Controller.showDetail(id);
	});
	Instanto.on("app:fundingbody:delete", function(id) {
		return FundingbodyApp.Controller.delete(id);
	});
	Instanto.on("app:fundingbody:create", function(data) {
		return FundingbodyApp.Controller.create(data);
	});
	Instanto.on("app:fundingbody:edit", function(id, data) {
		return FundingbodyApp.Controller.edit(id, data);
	});
	Instanto.on("app:fundingbody:filter", function(query) {
		return FundingbodyApp.Controller.filter(query);
	});
	Instanto.on("app:fundingbody:showfinancedprojectprimarycollection", function(id) {
		return FundingbodyApp.Controller.showFinancedprojectPrimaryCollection(id);
	});
	Instanto.on("app:fundingbody:filterfinancedprojectprimary", function(query) {
		return FundingbodyApp.Controller.filterFinancedprojectPrimary(query);
	});
	Instanto.on("app:fundingbody:showfinancedprojectsecondarycollection", function(id) {
		return FundingbodyApp.Controller.showFinancedprojectSecondaryCollection(id);
	});
	Instanto.on("app:fundingbody:filterfinancedprojectsecondary", function(query) {
		return FundingbodyApp.Controller.filterFinancedprojectSecondary(query);
	});
	Instanto.on("app:fundingbody:showfinancedprojectsecondaryadd", function(id) {
		return FundingbodyApp.Controller.showFinancedprojectSecondaryAdd(id);
	});
	Instanto.on("app:fundingbody:financedprojectsecondaryadd", function(id, data) {
		return FundingbodyApp.Controller.financedprojectSecondaryAdd(id, data);
	});
	Instanto.on("app:fundingbody:financedprojectsecondaryremove", function(id, financedprojectid) {
		return FundingbodyApp.Controller.financedprojectSecondaryRemove(id, financedprojectid);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:fundingbody:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:fundingbody:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:fundingbody:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:fundingbody:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:fundingbody:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:fundingbody:getfinancedprojectprimarycollection", function(id) {
		return app.API.getFinancedprojectPrimaryCollection(id);
	});
	Instanto.reqres.setHandler("api:fundingbody:getfinancedprojectsecondarycollection", function(id) {
		return app.API.getFinancedprojectSecondaryCollection(id);
	});
	Instanto.reqres.setHandler("api:fundingbody:financedprojectsecondaryadd", function(id, data) {
		return app.API.financedprojectSecondaryAdd(id, data);
	});
	Instanto.reqres.setHandler("api:fundingbody:financedprojectsecondaryremove", function(id, data) {
		return app.API.financedprojectSecondaryRemove(id, data);
	});
});
