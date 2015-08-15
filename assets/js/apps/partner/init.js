"use strict";

/**
 * PartnerApp is the application which manage all the logic related to partneres
 */
Instanto.module("PartnerApp", function(PartnerApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = PartnerApp;
	var appName = "Partner";
    
	app.state = {
		member: {}
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
   Instanto.on("app:partner:showcollection", function() {
		return PartnerApp.Controller.showCollection();
	});
	Instanto.on("app:partner:showcreate", function() {
		return PartnerApp.Controller.showCreate();
	});
	Instanto.on("app:partner:showedit", function(id) {
		return PartnerApp.Controller.showEdit(id);
	});
	Instanto.on("app:partner:showdetail", function(id) {
		return PartnerApp.Controller.showDetail(id);
	});
	Instanto.on("app:partner:delete", function(id) {
		return PartnerApp.Controller.delete(id);
	});
	Instanto.on("app:partner:create", function(data) {
		return PartnerApp.Controller.create(data);
	});
	Instanto.on("app:partner:edit", function(id, data) {
		return PartnerApp.Controller.edit(id, data);
	});
	Instanto.on("app:partner:updatelogo", function(id, file) {
		return PartnerApp.Controller.updateLogo(id, file);
	});
	Instanto.on("app:partner:filter", function(query) {
		return PartnerApp.Controller.filter(query);
	});
	Instanto.on("app:partner:showmembercollection", function(id) {
		return PartnerApp.Controller.showMemberCollection(id);
	});
	Instanto.on("app:partner:showmemberadd", function(id) {
		return PartnerApp.Controller.showMemberAdd(id);
	});
	Instanto.on("app:partner:memberadd", function(id, data) {
		return PartnerApp.Controller.memberAdd(id, data);
	});
	Instanto.on("app:partner:memberremove", function(id, memberid) {
		return PartnerApp.Controller.memberRemove(id, memberid);
	});
	Instanto.on("app:partner:filtermember", function(query) {
		return PartnerApp.Controller.filterMember(query);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:partner:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:partner:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:partner:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:partner:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:partner:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:partner:updatelogo", function(id, data) {
		return app.API.updateLogo(id, data);
	});
	
	Instanto.reqres.setHandler("api:partner:getmembercollection", function(id) {
		return app.API.getMemberCollection(id);
	});
	Instanto.reqres.setHandler("api:partner:memberadd", function(id, data) {
		return app.API.memberAdd(id, data);
	});
	Instanto.reqres.setHandler("api:partner:memberremove", function(id, data) {
		return app.API.memberRemove(id, data);
	});
	
});
