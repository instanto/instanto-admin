"use strict";

Instanto.module("FundingbodyApp", function(FundingbodyApp, Instanto, Backbone, Marionette, $, _){
	var app = FundingbodyApp;
	var appName = "Fundingbody";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
