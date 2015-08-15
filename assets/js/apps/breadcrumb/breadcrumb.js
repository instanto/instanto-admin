"use strict";

Instanto.module("BreadcrumbApp", function(BreadcrumbApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;

	BreadcrumbApp.Breadcrumb = Backbone.Model.extend({});
	BreadcrumbApp.BreadcrumbCollection = Backbone.Collection.extend({
		model: BreadcrumbApp.Breadcrumb
	});

	BreadcrumbApp.View = Marionette.ItemView.extend({
		tagName:"div",
		className: "ui large breadcrumb",
		template: "#breadcrumb-app-item-template",
		collection: BreadcrumbApp.BreadcrumbCollection
		
	});

	BreadcrumbApp.Controller = {
		createBreadcrumbs: function(breadscrumbs) {
			BreadcrumbApp._collection = new BreadcrumbApp.BreadcrumbCollection(breadscrumbs);
			BreadcrumbApp._itemView = new BreadcrumbApp.View({collection:BreadcrumbApp._collection});
			Instanto.ContainerApp.layout.getRegion("breadcrumb").show(BreadcrumbApp._itemView);
		}
	};

	Instanto.on("app:breadcrumb:create", function(breads) {
		return BreadcrumbApp.Controller.createBreadcrumbs(breads);
	});
});
