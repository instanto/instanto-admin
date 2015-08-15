"use strict";

Instanto.module("MemberApp", function(MemberApp, Instanto, Backbone, Marionette, $, _){
	var app = MemberApp;
	var appName = "Member";
	
	app.Model = Backbone.Model.extend({});
	app.Collection = Backbone.Collection.extend({
		model: app.Model
	});
});
