"use strict";

/**
 * StatusApp is the application which manage all the logic related to statuses
 */
Instanto.module("StatusApp", function(StatusApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
    var app = StatusApp;
	var appName = "Status";
    
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
   Instanto.on("app:status:showcollection", function() {
		return StatusApp.Controller.showCollection();
	});
	Instanto.on("app:status:showcreate", function() {
		return StatusApp.Controller.showCreate();
	});
	Instanto.on("app:status:showedit", function(id) {
		return StatusApp.Controller.showEdit(id);
	});
	Instanto.on("app:status:showdetail", function(id) {
		return StatusApp.Controller.showDetail(id);
	});
	Instanto.on("app:status:delete", function(id) {
		return StatusApp.Controller.delete(id);
	});
	Instanto.on("app:status:create", function(data) {
		return StatusApp.Controller.create(data);
	});
	Instanto.on("app:status:edit", function(id, data) {
		return StatusApp.Controller.edit(id, data);
	});
	Instanto.on("app:status:filter", function(query) {
		return StatusApp.Controller.filter(query);
	});
	Instanto.on("app:status:showmemberprimarycollection", function(id) {
		return StatusApp.Controller.showMemberPrimaryCollection(id);
	});
	Instanto.on("app:status:filtermemberprimary", function(query) {
		return StatusApp.Controller.filterMemberPrimary(query);
	});
	Instanto.on("app:status:showmembersecondarycollection", function(id) {
		return StatusApp.Controller.showMemberSecondaryCollection(id);
	});
	Instanto.on("app:status:filtermembersecondary", function(query) {
		return StatusApp.Controller.filterMemberSecondary(query);
	});
	Instanto.on("app:status:showmembersecondaryadd", function(id) {
		return StatusApp.Controller.showMemberSecondaryAdd(id);
	});
	Instanto.on("app:status:membersecondaryadd", function(id, data) {
		return StatusApp.Controller.memberSecondaryAdd(id, data);
	});
	Instanto.on("app:status:membersecondaryremove", function(id, memberid) {
		return StatusApp.Controller.memberSecondaryRemove(id, memberid);
	});
	
	/**
	 * Requests
	 */
	Instanto.reqres.setHandler("api:status:getcollection", function() {
		return app.API.getCollection();
	});
	Instanto.reqres.setHandler("api:status:getbyid", function(id) {
		return app.API.getById(id);
	});
	Instanto.reqres.setHandler("api:status:create", function(name, description) {
		return app.API.create(name, description);
	});
	Instanto.reqres.setHandler("api:status:update", function(id, name, description) {
		return app.API.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:status:delete", function(id) {
		return app.API.delete(id);
	});
	Instanto.reqres.setHandler("api:status:getmemberprimarycollection", function(id) {
		return app.API.getMemberPrimaryCollection(id);
	});
	Instanto.reqres.setHandler("api:status:getmembersecondarycollection", function(id) {
		return app.API.getMemberSecondaryCollection(id);
	});
	Instanto.reqres.setHandler("api:status:membersecondaryadd", function(id, data) {
		return app.API.memberSecondaryAdd(id, data);
	});
	Instanto.reqres.setHandler("api:status:membersecondaryremove", function(id, data) {
		return app.API.memberSecondaryRemove(id, data);
	});
});