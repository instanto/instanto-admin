"use strict"

Instanto.module("ContainerApp", function(ContainerApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;

	ContainerApp.LayoutView = Marionette.LayoutView.extend({
		tagName:"div",
		template: "#container-app-template",
		attributes: {
			id: "container-app"
		},
		ui: {
			dimmer: ".ui.dimmer",
		},
		regions: {
			header: "#header",
			breadcrumb: "#breadcrumb",
			sidebar: "#sidebar",
			notification: "#notification",
			app: "#app",
			footer: "#footer",
		}
	});

	ContainerApp.on("start", function() {
		ContainerApp.layout = new ContainerApp.LayoutView;
		Instanto.getRegion("main").show(ContainerApp.layout);
	});
});
