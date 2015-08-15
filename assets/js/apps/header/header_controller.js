"use strict"

Instanto.module("HeaderApp", function(HeaderApp, Instanto, Backbone, Marionette, $, _) {
	HeaderApp.Controller = {
		showHeader: function() {
			var view = new HeaderApp.View();
			Instanto.ContainerApp.layout.getRegion("header").show(view);
		},
		hideHeader: function() {
			Instanto.ContainerApp.layout.getRegion("header").empty();
		}
	};

	Instanto.on("app:header:showheader", function() {
		return HeaderApp.Controller.showHeader();
	});
	Instanto.on("app:header:hideheader", function() {
		return HeaderApp.Controller.hideHeader();
	});
});