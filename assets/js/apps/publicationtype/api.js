"use strict";

Instanto.module("PublicationtypeApp", function(PublicationtypeApp, Instanto, Backbone, Marionette, $, _){
	var app = PublicationtypeApp;
	var appName = "Publicationtype";
	
	app.API = {
		getCollection: function() {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "publicationtypes",
				type: 'GET',
				async: true,
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Token ' + localStorage.getItem('auth_token'));
				},
				success: function(data) {
					defer.resolve(data);
				},
				error: function(data) {
					defer.reject(data);
				}
			});
			return defer.promise();
		},
		getById: function(id) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "publicationtypes/" + id,
				type: 'GET',
				async: true,
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Token ' + localStorage.getItem('auth_token'));
				},
				success: function(data) {
					defer.resolve(data);
				},
				error: function(data) {
					defer.reject(data);
				}
			});
			return defer.promise();
		},
		create: function(data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "publicationtypes",
				type: 'POST',
				async: true,
				data: JSON.stringify(data),
				contentType: 'application/json; charset=utf-8',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Token ' + localStorage.getItem('auth_token'));
				},
				success: function(data) {
					defer.resolve(data);
				},
				error: function(data) {
					defer.reject(data);
				}
			});
			return defer.promise();
		},
		update: function(id, data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "publicationtypes/" + id,
				type: 'PUT',
				async: true,
				data: JSON.stringify(data),
				contentType: 'application/json; charset=utf-8',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Token ' + localStorage.getItem('auth_token'));
				},
				success: function(data) {
					defer.resolve(data);
				},
				error: function(data) {
					defer.reject(data);
				}
			});
			return defer.promise();
		},
		delete: function(id) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "publicationtypes/" + id,
				type: 'DELETE',
				async: true,
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Token ' + localStorage.getItem('auth_token'));
				},
				success: function(data) {
					defer.resolve(data);
				},
				error: function(data) {
					defer.reject(data);
				}
			});
			return defer.promise();
		},
		getPublicationCollection: function(id) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "publicationtypes/" + id + "/publications",
				type: 'GET',
				async: true,
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				beforeSend: function (xhr) {
					xhr.setRequestHeader('Authorization', 'Token ' + localStorage.getItem('auth_token'));
				},
				success: function(data) {
					defer.resolve(data);
				},
				error: function(data) {
					defer.reject(data);
				}
			});
			return defer.promise();
		},
	};
});


	
