"use strict";

Instanto.module("PublicationApp.Views", function(Views, Instanto, Backbone, Marionette, $, _) {
	var app = Instanto.PublicationApp;
	var appName = "Publication";
	
	Views.CreateView = Marionette.ItemView.extend({
		template: "#" + appName.toLowerCase() + "-app-create-template",
		ui: {
			form: "form",
			dimmer: ".dimmer",
			accordion: ".ui.accordion",
			titleInput: "#title",
			yearInput: "#year",
			publicationtypeInput: "#publicationtype",
			primaryauthorInput: "#primaryauthor",
			publisherInput: "#publisher",
			
			booktitleInput: "#booktitle",
			chapterInput: "#chapter",
			cityInput: "#city",
			countryInput: "#country",
			conferencenameInput: "#conferencename",
			editionInput: "#edition",
			institutionInput: "#institution",
			isbnInput: "#isbn",
			issnInput: "#issn",
			journalInput: "#journal",
			languageInput: "#language",
			nationalityInput: "#nationality",
			numberInput: "#number",
			organizationInput: "#organization",
			pagesInput: "#pages",
			schoolInput: "#school",
			seriesInput: "#series",
			volumeInput: "#volume"
		},
		events: {
			"submit @ui.form": "onSubmitForm"
		},
		onShow: function() {
			this.ui.accordion.accordion();
			this.ui.publicationtypeInput.dropdown();
			this.ui.primaryauthorInput.dropdown();
			this.ui.publisherInput.dropdown();
			Views.attachValidationRules(this.ui.form);
		},
		onSubmitForm: function(e) {
			e.preventDefault();
			var data = {};
			data.title = this.ui.titleInput.val();
			data.year = parseInt(this.ui.yearInput.val());
			data.volume = this.ui.volumeInput.val();
			data.publication_type = parseInt(this.ui.publicationtypeInput.val());
			data.primary_author = parseInt(this.ui.primaryauthorInput.val());
			data.publisher = parseInt(this.ui.publisherInput.val());
			
			data.book_title = this.ui.booktitleInput.val();
			data.chapter = this.ui.chapterInput.val();
			data.city = this.ui.cityInput.val();
			data.country = this.ui.countryInput.val();
			data.conference_name = this.ui.conferencenameInput.val();
			data.edition  = this.ui.editionInput.val();
			data.institution = this.ui.institutionInput.val();
			data.isbn = this.ui.isbnInput.val();
			data.issn = this.ui.issnInput.val();
			data.journal = this.ui.journalInput.val();
			data.nationality = this.ui.nationalityInput.val();
			data.number = this.ui.numberInput.val();
			data.organization =  this.ui.organizationInput.val();
			data.pages = this.ui.pagesInput.val();
			data.school = this.ui.schoolInput.val();
			data.series = this.ui.seriesInput.val();
			data.volume = this.ui.volumeInput.val();
			data.language = this.ui.languageInput.val();
			
			Instanto.trigger("app:" + appName.toLowerCase() + ":create", data);
		}
	});

});
