"use strict"

Instanto.module("IntroApp", function(IntroApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;

	IntroApp.View = Marionette.ItemView.extend({
		tagName: "div",
		attributes: {
			id: "intro-app"
		},
		template: "#intro-app-template"
	});

	IntroApp.on("start", function() {
		Instanto.getRegion("main").show(new IntroApp.View);
		setTimeout(function(){
			if(localStorage.getItem("auth_token")) {
				Instanto.UtilApp.start();
				Instanto.ContainerApp.start();
				Instanto.HeaderApp.start();
				Instanto.BreadcrumbApp.start();
				Instanto.StatusApp.start();
				Instanto.NewspaperApp.start();
				Instanto.ArticleApp.start();
				Instanto.ResearchareaApp.start();
				Instanto.ResearchlineApp.start();

				// Trigger static non-chaning global ui like the header
				Instanto.trigger("app:header:showheader");

				// Start router here 
				// GOOD ARTICLE https://lostechies.com/derickbailey/2012/02/06/3-stages-of-a-backbone-applications-startup/
				if(Backbone.history) {
					if(!Backbone.history.start()) {
						console.log("Route does not exists: ", window.location.href);
						Instanto.trigger("app:status:showcollection");
					}
				}
			} else {
				Instanto.LoginApp.start();
				Instanto.AuthApp.start();
			}
		}, 0);
	});
});
