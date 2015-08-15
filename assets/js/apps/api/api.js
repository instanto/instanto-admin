"use strict";

Instanto.module("API", function(API, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;

	API.rootURL = "/api/";

	var api = {};

	// authAPI handles AJAX calls to /api/auth/... endpoints
	var authAPI = {
		login: function(username, password) {
			var defer = $.Deferred();
			$.ajax({
				url: API.rootURL + "login",
				type: 'POST',
				async: true,
				data: JSON.stringify({ "username": username, "password" : password }),
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				success: function(data) {
					defer.resolve(data.token);
				},
				error: function() {
					defer.reject();
				}
			});
			return defer.promise();
		}
	};

	// memberAPI handles AJAX calls to /api/memberes/... endpoints
	var memberAPI = {
		getCollection: function() {
			var defer = $.Deferred();
			$.ajax({
				url: API.rootURL + "members",
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
				url: API.rootURL + "members/" + id,
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
				url: API.rootURL + "members",
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
				url: API.rootURL + "members/" + id,
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
				url: API.rootURL + "members/" + id,
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
		}
	};
	

	// articleAPI handles AJAX calls to /api/articlees/... endpoints
	var articleAPI = {
		getCollection: function() {
			var defer = $.Deferred();
			$.ajax({
				url: API.rootURL + "articles",
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
				url: API.rootURL + "articles/" + id,
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
				url: API.rootURL + "articles",
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
				url: API.rootURL + "articles/" + id,
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
				url: API.rootURL + "articles/" + id,
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
		}
	};
	

	Instanto.reqres.setHandler("api:auth:login", function(username, password) {
		return authAPI.login(username, password);
	});




	
	



	Instanto.reqres.setHandler("api:member:getcollection", function() {
		return memberAPI.getCollection();
	});
	Instanto.reqres.setHandler("api:member:getbyid", function(id) {
		return memberAPI.getById(id);
	});
	Instanto.reqres.setHandler("api:member:create", function(name, description) {
		return memberAPI.create(name, description);
	});
	Instanto.reqres.setHandler("api:member:update", function(id, name, description) {
		return memberAPI.update(id, name, description);
	});
	Instanto.reqres.setHandler("api:member:delete", function(id) {
		return memberAPI.delete(id);
	});
	
	
	
	
});
