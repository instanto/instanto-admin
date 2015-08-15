"use strict";

Instanto.module("NewspaperApp", function(NewspaperApp, Instanto, Backbone, Marionette, $, _){
	var app = NewspaperApp;
	var appName = "Newspaper";
	
	app.API = {
		getCollection: function() {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "newspapers",
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
				url: Instanto.config.rootURLForAPI + "newspapers/" + id,
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
				url: Instanto.config.rootURLForAPI + "newspapers",
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
				url: Instanto.config.rootURLForAPI + "newspapers/" + id,
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
				url: Instanto.config.rootURLForAPI + "newspapers/" + id,
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
		getArticleCollection: function(id) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "newspapers/" + id + "/articles",
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
		updateLogo: function(id, data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "newspapers/" + id + "/logo",
				type: 'PUT',
				async: true,
				data: data,
				processData: false,
				contentType: false,
				dataType: "text",
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


	
