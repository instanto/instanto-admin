"use strict";

Instanto.module("MemberApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.MemberApp;
	var appName = "Member";
	
	Views.CreateView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-create-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			firstNameInput: "input[name='first_name']",
			lastNameInput: "input[name='last_name']",
			degreeInput: ".ui.radio",
			emailInput: "input[name='email']",
			yearInInput: "input[name='year_in']",
			yearOutInput: "input[name='year_out']",
			primarystatusInput: "#primarystatus",
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onRender: function() {
			this.ui.degreeInput.checkbox();
			this.ui.primarystatusInput.dropdown();
			Views.attachValidationRules(this.ui.form);
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.first_name = this.ui.firstNameInput.val();
			data.last_name = this.ui.lastNameInput.val();
			data.degree = this.$el.find(":radio:checked").val();
			data.email = this.ui.emailInput.val();
			data.year_in = parseInt(this.ui.yearInInput.val());
			data.year_out = parseInt(this.ui.yearOutInput.val()) === NaN ? 0 : parseInt(this.ui.yearOutInput.val());
			data.primary_status = parseInt(this.ui.primarystatusInput.val());
			Instanto.trigger("app:" + appName.toLowerCase() + ":create", data);
		}
	});

});
