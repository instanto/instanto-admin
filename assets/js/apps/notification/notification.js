"use strict"

Instanto.module("NotificationApp", function(NotificationApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;

	NotificationApp.Notification = Backbone.Model.extend({});
	NotificationApp.NotificationCollection = Backbone.Collection.extend({
		model: NotificationApp.Notification
	});

	NotificationApp.View = Marionette.ItemView.extend({
		tagName:"div",
		template: "#notification-app-item-template",
		collection: NotificationApp.NotificationCollection,
		ui: {
			closeButton: ".close.icon"
		},
		events: {
			"click @ui.closeButton": "onClickCloseButton"
		},
		onClickCloseButton: function(e) {
			Instanto.trigger("app:notification:clean");
		}
		
	});

	NotificationApp.Controller = {
		createNotification: function(type, header, message) {
			NotificationApp._item = new NotificationApp.Notification({type: type, header:header, message: message});
			NotificationApp._itemView = new NotificationApp.View({model:NotificationApp._item});
			Instanto.ContainerApp.layout.getRegion("notification").show(NotificationApp._itemView);
		},
		cleanNotification: function() {
			Instanto.ContainerApp.layout.getRegion("notification").empty();
		}
	};

	Instanto.on("app:notification:create", function(type, header, message) {
		return NotificationApp.Controller.createNotification(type, header, message);
	});
	Instanto.on("app:notification:clean", function() {
		return NotificationApp.Controller.cleanNotification();
	});
});
