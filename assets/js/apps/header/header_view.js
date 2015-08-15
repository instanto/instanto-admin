"use strict"

Instanto.module("HeaderApp", function(HeaderApp, Instanto, Backbone, Marionette, $, _) {
	HeaderApp.View = Marionette.ItemView.extend({
		tagName: "div",
		className: "ui taled green menu",
		template: "#header-app-template",
		onRender: function() {
			this.$el.find(".ui.dropdown").dropdown();
		}
	});
});