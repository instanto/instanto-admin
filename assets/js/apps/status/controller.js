"use strict";

Instanto.module("StatusApp", function(StatusApp, Instanto, Backbone, Marionette, $, _){
	var app = StatusApp;
	var appName = "Status";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "StatusApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "StatusApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "StatusApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "StatusApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "StatusApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "StatusApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "StatusApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		filterMemberPrimary: function(query) {
			Instanto.trigger("app:util:filter", query, "first_name", app.state.member.primary.collection, app.state.member.primary.collectionView);
		},
		filterMemberSecondary: function(query) {
			Instanto.trigger("app:util:filter", query, "first_name", app.state.member.secondary.collection, app.state.member.secondary.collectionView);
		},
		showMemberPrimaryCollection: function(id) {
			Instanto.trigger("app:util:showrelationprimarycollection", "StatusApp", id, "MemberApp");
		},
		showMemberSecondaryCollection: function(id) {
			Instanto.trigger("app:util:showrelationsecondarycollection", "StatusApp", id, "MemberApp");
		},
		showMemberSecondaryAdd: function(id) {
			Instanto.trigger("app:util:showrelationsecondaryadd", "StatusApp", id, "MemberApp");
		},
		memberSecondaryAdd: function(id, data) {
			Instanto.trigger("app:util:relationsecondaryadd", "StatusApp", id, "MemberApp", data);
		},
		memberSecondaryRemove: function(id, data) {
			Instanto.trigger("app:util:relationsecondaryremove", "StatusApp", id, "MemberApp", data);
		}
	};
}); 