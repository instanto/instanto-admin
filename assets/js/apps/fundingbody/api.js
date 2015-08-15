"use strict";

Instanto.module("FundingbodyApp", function(FundingbodyApp, Instanto, Backbone, Marionette, $, _){
	var app = FundingbodyApp;
	var appName = "Fundingbody";
	
	app.API = {
		getCollection: function() {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "fundingbodies",
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
				url: Instanto.config.rootURLForAPI + "fundingbodies/" + id,
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
				url: Instanto.config.rootURLForAPI + "fundingbodies",
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
				url: Instanto.config.rootURLForAPI + "fundingbodies/" + id,
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
				url: Instanto.config.rootURLForAPI + "fundingbodies/" + id,
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
		getFinancedprojectPrimaryCollection: function(id) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "fundingbodies/" + id + "/primaryfinancedprojects",
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
		getFinancedprojectSecondaryCollection: function(id) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "fundingbodies/" + id + "/secondaryfinancedprojects",
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
		financedprojectSecondaryAdd: function(id, data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "fundingbodies/" + id + "/secondaryfinancedprojects",
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
		financedprojectSecondaryRemove: function(id, data) {
			var defer = $.Deferred();
			$.ajax({
				url: Instanto.config.rootURLForAPI + "fundingbodies/" + id + "/secondaryfinancedprojects",
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


	
