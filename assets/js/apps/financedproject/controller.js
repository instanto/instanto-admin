"use strict";

Instanto.module("FinancedprojectApp", function(FinancedprojectApp, Instanto, Backbone, Marionette, $, _){
	var app = FinancedprojectApp;
	var appName = "Financedproject";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "FinancedprojectApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreatewith", "FinancedprojectApp", ["MemberApp", "FundingBodyApp"]);
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetailwith", "FinancedprojectApp", id, [
				{appID: "FundingbodyApp", attr: "primary_funding_body"},
				{appID: "MemberApp", attr: "primary_leader"}
			]);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showeditwith", "FinancedprojectApp", id, ["MemberApp", "FundingbodyApp"]);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "FinancedprojectApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "FinancedprojectApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "FinancedprojectApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.collection, app.state.collectionView);
		}
	};
}); 
