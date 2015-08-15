"use strict";

Instanto.module("FinancedprojectApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.FinancedprojectApp;
	var appName = "Financedproject";
	
	Views.EditView = Marionette.ItemView.extend({
		template: "#" + appName.toLocaleLowerCase() + "-app-edit-template",
		templateHelpers: {
			epochToDate: function(epoch) {
				var date = moment.unix(epoch)
				return date.format("YYYY-MM-DD");
			}
		},
		ui: {
			form: "form",
			dimmer: ".dimmer",
			titleInput: "input[name='title']",
			startedInput: "input[name='started']",
			endedInput: "input[name='ended']",
			budgetInput: "input[name='budget']",
			scopeInput: ".ui.radio",
			primaryfundingbodyInput: "#primaryfundingbody",
			primaryrecordInput: "input[name='primaryrecord']",
			primaryleaderInput: "#primaryleader",
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onRender: function() {
			this.ui.scopeInput.checkbox();
			this.ui.primaryfundingbodyInput.dropdown();
			this.ui.primaryleaderInput.dropdown();
			Views.attachValidationRules(this.ui.form);
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.title = this.ui.titleInput.val();
			data.started = new Date(this.ui.startedInput.val()).getTime()/1000;
			data.ended = new Date(this.ui.endedInput.val()).getTime()/1000;
			data.budget = parseInt(this.ui.budgetInput.val());
			data.scope = this.$el.find(":radio:checked").val();
			data.primary_funding_body = parseInt(this.ui.primaryfundingbodyInput.val());
			data.primary_record = this.ui.primaryrecordInput.val();
			data.primary_leader = parseInt(this.ui.primaryleaderInput.val());
			Instanto.trigger("app:" + appName.toLocaleLowerCase() + ":edit", this.model.get("model").get("id"), data);
		}
	});

});
