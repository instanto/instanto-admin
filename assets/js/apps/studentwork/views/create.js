"use strict";

Instanto.module("StudentworkApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.StudentworkApp;
	var appName = "Studentwork";
	
	Views.CreateView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-create-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			titleInput: "#title",
			yearInput: "#year",
			schoolInput: "#school",
			volumeInput: "#volume",
			studentworktypeInput: "#studentworktype",
			authorInput: "#author",
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onShow: function() {
			this.ui.studentworktypeInput.dropdown();
			this.ui.authorInput.dropdown();
			Views.attachValidationRules(this.ui.form);
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.title = this.ui.titleInput.val();
			data.year = parseInt(this.ui.yearInput.val());
			data.school = this.ui.schoolInput.val();
			data.volume = this.ui.volumeInput.val();
			data.student_work_type = parseInt(this.ui.studentworktypeInput.val());
			data.author = parseInt(this.ui.authorInput.val());
			Instanto.trigger("app:" + appName.toLowerCase() + ":create", data);
		}
	});

});
