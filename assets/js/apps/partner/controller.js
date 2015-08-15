"use strict";

Instanto.module("PartnerApp", function(PartnerApp, Instanto, Backbone, Marionette, $, _){
	var app = PartnerApp;
	var appName = "Partner";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "PartnerApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "PartnerApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "PartnerApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "PartnerApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "PartnerApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "PartnerApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "PartnerApp", id, data);
		},
		updateLogo: function(id, file) {
			Instanto.trigger("app:util:updatelogo", "PartnerApp", id , file);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		showMemberCollection: function(id) {
			Instanto.trigger("app:util:showrelationhascollection", "PartnerApp", id, "MemberApp");
		},
		showMemberAdd: function(id) {
			Instanto.trigger("app:util:showrelationhasadd", "PartnerApp", id, "MemberApp");
		},
		memberAdd: function(id, data) {
			Instanto.trigger("app:util:relationhasadd", "PartnerApp", id, "MemberApp", data);
		},
		memberRemove: function(id, data) {
			Instanto.trigger("app:util:relationhasremove", "PartnerApp", id, "MemberApp", data);
		},
		filterMember: function(query) {
			Instanto.trigger("app:util:filter", query, "first_name", app.state.member.collection, app.state.member.collectionView);
		}
	};
}); 
