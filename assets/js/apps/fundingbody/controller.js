"use strict";

Instanto.module("FundingbodyApp", function(FundingbodyApp, Instanto, Backbone, Marionette, $, _){
	var app = FundingbodyApp;
	var appName = "Fundingbody";
	
	app.Controller = {
		showCollection: function() {
			Instanto.trigger("app:util:showcollection", "FundingbodyApp");
		},
		showCreate: function() {
			Instanto.trigger("app:util:showcreate", "FundingbodyApp");
		},
		showDetail: function(id) {
			Instanto.trigger("app:util:showdetail", "FundingbodyApp", id);
		},
		showEdit: function(id) {
			Instanto.trigger("app:util:showedit", "FundingbodyApp", id);
		},
		delete: function(id) {
			Instanto.trigger("app:util:delete", "FundingbodyApp", id);
		},
		create: function(data) {
			Instanto.trigger("app:util:create", "FundingbodyApp", data);
		},
		edit: function(id, data) {
			Instanto.trigger("app:util:edit", "FundingbodyApp", id, data);
		},
		filter: function(query) {
			Instanto.trigger("app:util:filter", query, "name", app.state.collection, app.state.collectionView);
		},
		filterFinancedprojectPrimary: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.financedproject.primary.collection, app.state.financedproject.primary.collectionView);
		},
		filterFinancedprojectSecondary: function(query) {
			Instanto.trigger("app:util:filter", query, "title", app.state.financedproject.secondary.collection, app.state.financedproject.secondary.collectionView);
		},
		showFinancedprojectPrimaryCollection: function(id) {
			Instanto.trigger("app:util:showrelationprimarycollection", "FundingbodyApp", id, "FinancedprojectApp");
		},
		showFinancedprojectSecondaryCollection: function(id) {
			Instanto.trigger("app:util:showrelationsecondarycollection", "FundingbodyApp", id, "FinancedprojectApp");
		},
		showFinancedprojectSecondaryAdd: function(id) {
			Instanto.trigger("app:util:showrelationsecondaryadd", "FundingbodyApp", id, "FinancedprojectApp");
		},
		financedprojectSecondaryAdd: function(id, data) {
			Instanto.trigger("app:util:relationsecondaryadd", "FundingbodyApp", id, "FinancedprojectApp", data, {prettyNameAssoc: "Financed project", attrAssoc: "financed_project"});
		},
		financedprojectSecondaryRemove: function(id, data) {
			Instanto.trigger("app:util:relationsecondaryremove", "FundingbodyApp", id, "FinancedprojectApp", data, {prettyName: "Funding body", prettyNameAssoc: "Financed project", attrAssoc: "financed_project"});
		}
	};
}); 
