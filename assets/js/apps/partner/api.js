"use strict";

Instanto.module("PartnerApp", function(PartnerApp, Instanto, Backbone, Marionette, $, _){
	var app = PartnerApp;
	var appName = "Partner";
	
	app.API = {
		getCollection: function() {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "partners",
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
				url: Instanto.config.rootURLForAPI + "partners/" + id,
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
				url: Instanto.config.rootURLForAPI + "partners",
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
				url: Instanto.config.rootURLForAPI + "partners/" + id,
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
				url: Instanto.config.rootURLForAPI + "partners/" + id,
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
		updateLogo: function(id, data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "partners/" + id + "/logo",
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
		getMemberCollection: function(id) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "partners/" + id + "/members",
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
		memberAdd: function(id, data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "partners/" + id + "/members",
				type: 'POST',
				async: true,
				data: JSON.stringify(data),
				contentType: 'application/json; charset=utf-8',
				dataType: 'text',
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
		memberRemove: function(id, data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "partners/" + id + "/members",
				type: 'DELETE',
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
	};
});


	
