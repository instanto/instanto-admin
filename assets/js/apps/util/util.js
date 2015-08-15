"use strict";

Instanto.module("UtilApp", function(UtilApp, Instanto, Backbone, Marionette, $, _) {
	this.startWithParent = false;
	
	UtilApp.Controller = {
		
		/**
		 * filter filters the models inside a collection view regarding a query.
		 * @param {string} query - The string to filter the models.
		 * @param {string} author - The attribute to make the filter.
		 * @param {Backbone.Collection} collection - The collection to filter.
		 * @param {Marionette.CollectionView} collectionView - The collection view to show/hide the models.
		 */
		filter: function(query, attributes, collection, collectionView) {
			if(!Array.isArray(attributes)) {
				attributes = [attributes];
			}
			query = query.toLowerCase();
		 	var modelsToShow = [];
		    var modelsToHide = [];
		    var children = collectionView.children;
		
		    if (query !== "") {
				collection.each(function(model) {
					var match = false;
					for(var i = 0; i < attributes.length; i++) {
						var attribute = attributes[i];
	                    if (model.get(attribute).split("/").pop().toLowerCase().indexOf(query) !== -1) {
							match = true;
						}
					}
					if (match) {
						modelsToShow.push(model);
					} else {
						modelsToHide.push(model);
					}
				});
			 } else {
		            modelsToShow = collection;
		            modelsToHide = [];
		    }
			
		    modelsToShow.forEach(function(model) {
		            var view = children.findByModel(model);
		            view.$el.show();
		            model.unset("hidden");
		    });
		    modelsToHide.forEach(function(model) {
		            var view = children.findByModel(model);
		            view.$el.hide();
		            model.set({"hidden":true});
		    });
		},
		
		/**
		 * showCollection creates a view showing all the models of the app
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 */
		showCollection: function(appID) {
			var app = Instanto[appID];
			var appName = appID.substr(0,appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase());
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: true}
			]);

			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");
			app.state.collection = new app.Collection;
			app.state.collectionView = new app.Views.CollectionView({collection:app.state.collection});

			Instanto.ContainerApp.layout.getRegion("app").show(app.state.collectionView);

			var listing = Instanto.request("api:" + appName.toLowerCase() + ":getcollection");
			$.when(listing).done(function(data) {
				app.state.collection.add(data[appName.toLowerCase() + "_collection"]);
				app.state.collectionView.ui.table.tablesorter({cssAsc:"ascending", cssDesc:"descending"});
			});
			$.when(listing).always(function() {
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
		},
		
		/**
		 * showCreateForm creates a form to add new models
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 */
		showCreate: function(appID) {
			var app = Instanto[appID];
			var appName = appID.substr(0,appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/new");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:"New", href:"#"+appNamePlural.toLocaleLowerCase() + "/new", active: true}
			]);
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");

			app.state.createView = new app.Views.CreateView;
			Instanto.ContainerApp.layout.getRegion("app").show(app.state.createView);
			Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
		},
		
		/**
		 * showCreateWith creates a form to add new models with a collection merged into it
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 */
		showCreateWith: function(appID, appIDs) {
			var app = Instanto[appID];
			var appName = appID.substr(0,appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			if(!Array.isArray(appIDs)) {
				appIDs = [appIDs]
			}
			var assocs = [];
			appIDs.forEach(function(appID) {
				var appAssoc = Instanto[appID];
				var appNameAssoc = appID.substr(0, appID.indexOf("App"));
				var appNamePluralAssoc = appNameAssoc + "es";
				assocs.push({"appID": appID, "appName": appNameAssoc, "appNamePlural": appNamePluralAssoc});
			});
		
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/new");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:"New", href:"#"+appNamePlural.toLocaleLowerCase() + "/new", active: true}
			]);
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");
			
			var listings = []
			assocs.forEach(function(app) {
				var listing = Instanto.request("api:" + app.appName.toLowerCase() + ":getcollection");
				listings.push(listing);	
			});
			$.when.apply($, listings).done(function() {
				// the number of arguments is undefined so we need to use arguments and and walk all of them
				var model = {};
				for(var i = 0; i < arguments.length; i++) {
					var data = arguments[i];
					var appAssoc = assocs[i];
					model[appAssoc.appName.toLowerCase() + "_collection"] = data[appAssoc.appName.toLowerCase() + "_collection"];
				}
				var model = new Backbone.Model(model);
				app.state.createView = new app.Views.CreateView({model: model});
				Instanto.ContainerApp.layout.getRegion("app").show(app.state.createView);
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when.apply($, listings).always(function() {
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
		},
		
		/**
		 * showEditForm creates a form to edit models
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 */
		showEdit: function(appID, id) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/edit");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:"Edit", href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/edit", active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");

			var getting = Instanto.request("api:" + appName.toLowerCase() + ":getbyid", id);
			$.when(getting).done(function(data) {
				app.state.model = new app.Model(data);
				app.state.model_id = id;
				var model = new Backbone.Model({model: app.state.model});
				app.state.editView = new app.Views.EditView({model:model});
				Instanto.ContainerApp.layout.getRegion("app").show(app.state.editView);
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when(getting).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
			
		},
		
		/**
		 * showEditForm creates a form to edit models
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 */
		showEditWith: function(appID, id, appIDs) {
			var app = Instanto[appID];
			var appName = appID.substr(0,appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			if(!Array.isArray(appIDs)) {
				appIDs = [appIDs]
			}
			var assocs = [];
			appIDs.forEach(function(appID) {
				var appAssoc = Instanto[appID];
				var appNameAssoc = appID.substr(0, appID.indexOf("App"));
				var appNamePluralAssoc = appNameAssoc + "es";
				assocs.push({"appID": appID, "appName": appNameAssoc, "appNamePlural": appNamePluralAssoc});
			});
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/edit");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:"Edit", href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/edit", active: true}
			]);
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/edit");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:"Edit", href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/edit", active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");
			var getting = Instanto.request("api:" + appName.toLowerCase() + ":getbyid", id);
			var listings = [];
			listings.push(getting);
			assocs.forEach(function(app) {
				var listing = Instanto.request("api:" + app.appName.toLowerCase() + ":getcollection");
				listings.push(listing);	
			});
			$.when.apply($, listings).done(function() {
				// the number of arguments is undefined so we need to use arguments and and walk all of them
				app.state.model = new app.Model(arguments[0]);
				app.state.model_id = id;
				var model = {model: app.state.model};
				for(var i = 1; i < arguments.length; i++) {
					var data = arguments[i];
					var appAssoc = assocs[i-1];
					model[appAssoc.appName.toLowerCase() + "_collection"] = data[appAssoc.appName.toLowerCase() + "_collection"];
				}
				var model = new Backbone.Model(model);
				app.state.editView = new app.Views.EditView({model: model});
				Instanto.ContainerApp.layout.getRegion("app").show(app.state.editView);
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when.apply($, listings).always(function() {
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
				
			/*
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/edit");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:"Edit", href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/edit", active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");
			var getting = Instanto.request("api:" + appName.toLowerCase() + ":getbyid", id);
			var listing = Instanto.request("api:" + appNameAssoc.toLowerCase() + ":getcollection");
			
			$.when(getting, listing).done(function(data, dataAssoc) {
				console.log(data, dataAssoc);
				app.state.model = new app.Model(data);
				app.state.model_id = id;
				var model = {model: app.state.model};
				model[appNameAssoc.toLowerCase() + "_collection"] = dataAssoc[appNameAssoc.toLowerCase() + "_collection"];
				var model = new Backbone.Model(model);
				app.state.editView = new app.Views.EditView({model: model});
				Instanto.ContainerApp.layout.getRegion("app").show(app.state.editView);
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when(getting, listing).fail(function(data, dataAssoc) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
			*/
		},
		
		/**
		 * showDetail creates a view to visualize the model in detail, all attributes are shown
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 */
		showDetail: function(appID, id, appIDAssoc) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id);
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");

			var getting = Instanto.request("api:" + appName.toLowerCase() + ":getbyid", id);
			$.when(getting).done(function(data) {
				app.state.model = new app.Model(data);
				app.state.model_id = id;
				var model = new Backbone.Model({model: app.state.model});
				app.state.detailView = new app.Views.DetailView({model:model});
				Instanto.ContainerApp.layout.getRegion("app").show(app.state.detailView);
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when(getting).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * showDetailWith creates a view to visualize the model in detail with other entities inside
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 * @param {map} assocs -  A map with {id: appID, attr: attributeID}
		 */
		showDetailWith: function(appID, id, assocs) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			if(!Array.isArray(assocs)) {
				assocs = [assocs]
			}
			assocs.forEach(function(assoc) {
				var appAssoc = Instanto[assoc.appID];
				var appNameAssoc = assoc.appID.substr(0, assoc.appID.indexOf("App"));
				var appNamePluralAssoc = appNameAssoc + "es";
				assoc.app = appAssoc;
				assoc.appName = appNameAssoc;
				assoc.appNamePlural = appNamePluralAssoc;
			});
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id);
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");
			
			var getting = Instanto.request("api:" + appName.toLowerCase() + ":getbyid", id);
			$.when(getting).done(function(data) {
				var gettings = [];
				assocs.forEach(function(assoc) {
					var getting = Instanto.request("api:" + assoc.appName.toLowerCase() + ":getbyid", data[assoc.attr]);
					gettings.push(getting);	
				});
				$.when.apply($, gettings).done(function() {
					app.state.model = new app.Model(data);
					app.state.model_id = id;
					var model = {model: app.state.model};
					for(var i = 0; i < arguments.length; i++) {
						var arg = arguments[i];
						var assoc = assocs[i];
						model[assoc.attr] = new assoc.app.Model(arg);
						console.log(arguments);
						console.log(model);
					}
					var model = new Backbone.Model(model);
					app.state.detailView = new app.Views.DetailView({model:model});
					console.log(app.state.detailView)
					Instanto.ContainerApp.layout.getRegion("app").show(app.state.detailView);
					Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
				});
				$.when.apply($, gettings).fail(function() {
					if(data.status === 404) {
						Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
						Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
					}
				});
			});
			
			$.when(getting).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * updateLogo creates a modal to crop the new log and save it to disk
		 */
		updateLogo: function(appID, id, file) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var self = app.state.detailView;
	        var reader = new FileReader();
			
	        reader.onload = function(e) {
				self.ui.uploadLogoButton.removeClass("loading");
	            var data = reader.result;
				self.ui.logoPreview.attr("src", data);
				self.ui.modal.modal({
					onApprove: function() {
						var canvasData = self.ui.logoPreview.cropper('getCroppedCanvas', {
							width: 120,
							height: 120
						});
						canvasData.toBlob(function(blob) {
							var updating = Instanto.request("api:" + appName.toLowerCase() +":updatelogo", id, blob);
							$.when(updating).done(function() {
								self.ui.logoImage.attr("src", canvasData.toDataURL());
								self.ui.form.removeClass("error");
								Instanto.trigger("app:notification:create", "success", "Logo updated", "The logo has been updated");
							});
							$.when(updating).fail(function(data) {
								if(data.status === 400) {
									var error = JSON.parse(data.responseText);
									self.ui.form.addClass("error");
									self.ui.form.form("add errors", [error.field + " " + error.reason]);	
								} else {
									Instanto.trigger("app:notification:create", "error", "Logo update failed", "The logo could not been updated");
								}
							});
						});
					}
				}).modal("show");
				self.ui.logoPreview.cropper('destroy');
				self.ui.logoPreview.cropper({
				  aspectRatio: 1 / 1,
				  rotatable: true,
				  modal: true
				});	
       		};
			
			if(file.size > Instanto.config.logoMaxSize) {
				self.ui.form.addClass("error");
				self.ui.form.form("add errors", ["Logo maximum size is " + Instanto.config.logoMaxSize/1024/1024 + " MB"]);
			} else {
				self.ui.uploadLogoButton.addClass("loading");
				reader.readAsDataURL(file);	
			}
		},
		
		/**
		 * delete remove a model from a collection
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 */
		delete: function(appID, id) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var model = app.state.collection.get(id);
			var children = app.state.collectionView.children;
			var childview = children.findByModel(model);

			childview.$el.addClass("disabled");
			childview.ui.deleteButton.addClass("loading");
			
			var removing = Instanto.request("api:" + appName.toLowerCase() + ":delete", id);
			$.when(removing).done(function() {
				childview.$el.removeClass("disabled");
				childview.ui.deleteButton.removeClass("loading");
				app.state.collection.remove(model);
				Instanto.trigger("app:notification:create", "success", appName + " deleted", "The " + appName.toLowerCase() + " #" + id + " has been deleted");
			});
			$.when(removing).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * create creates a new model
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {Object} data - The attributes of the model
		 */
		create: function(appID, data) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			app.state.createView.ui.dimmer.addClass("active");
			var creating = Instanto.request("api:" + appName.toLowerCase() + ":create", data);
			$.when(creating).done(function(data) {
				Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
				Instanto.trigger("app:notification:create", "success", appName + " created", "Created " + appName.toLowerCase() + " #" + data.id);
			});
			$.when(creating).fail(function(data) {
				if(data.status === 400) {
					var error = data.responseJSON;
					app.state.createView.ui.dimmer.removeClass("active");
					app.state.createView.ui.form.addClass("error");
					app.state.createView.ui.form.form("add errors", [error.field + " " + error.reason]);
				} else if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * edit edits a model
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 * @param {Object} data - The attributes of the model
		 */
		edit: function(appID, id, data) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			app.state.editView.ui.dimmer.addClass("active");
			var updating = Instanto.request("api:" + appName.toLowerCase() + ":update", id, data);
			$.when(updating).done(function(data) {
				Instanto.trigger("app:" + appName.toLowerCase() + ":showdetail", id);
				Instanto.trigger("app:notification:create", "success", appName + " updated", "Updated " + appName.toLowerCase() + " #" + id);
			});
			$.when(updating).fail(function(data) {
				if(data.status === 400) {
					var error = data.responseJSON;
					app.state.editView.ui.dimmer.removeClass("active");
					app.state.editView.ui.form.addClass("error");
					app.state.editView.ui.form.form("add errors", [error.field + " " + error.reason]);
				} else if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase()+ ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * showPrimaryAssoc shows a collection of models that belong to app appIDAssoc that has the model referencing by id as their primary 
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 * @param {string} appID - The string to identify the app on the other end of the relationship. Ex: StatusApp or MemberApp
		 */
		showRelationPrimaryCollection: function(appID, id, appIDAssoc) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/primary" + appNamePluralAssoc.toLowerCase());
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:"Primary " + appNamePluralAssoc.toLowerCase(), href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/primary" + appNamePluralAssoc.toLowerCase(), active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");

			
			app.state[appNameAssoc.toLowerCase()].primary.collection = new appAssoc.Collection;
			app.state[appNameAssoc.toLowerCase()].primary.collectionView = new app[appNameAssoc].Primary.Views.CollectionView({collection:app.state[appNameAssoc.toLowerCase()].primary.collection});

			Instanto.ContainerApp.layout.getRegion("app").show(app.state[appNameAssoc.toLowerCase()].primary.collectionView);

			var listing = Instanto.request("api:" + appName.toLowerCase() + ":get" + appNameAssoc.toLowerCase() + "primarycollection", id);
			$.when(listing).done(function(data) {
				app.state.model_id = id;
				app.state[appNameAssoc.toLowerCase()].primary.collection.add(data[appNameAssoc.toLowerCase() + "_collection"]);
				app.state[appNameAssoc.toLowerCase()].primary.collectionView.ui.table.tablesorter({cssAsc:"ascending",cssDesc:"descending"});
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when(listing).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * showSecondaryAssoc shows a collection of models that belong to app appIDAssoc that has the model referencing by id as their secondary 
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 * @param {string} appID - The string to identify the app on the other end of the relationship. Ex: StatusApp or MemberApp
		 */
		showRelationSecondaryCollection: function(appID, id, appIDAssoc) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/secondary" + appNamePluralAssoc.toLowerCase());
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:"Secondary " + appNamePluralAssoc.toLowerCase(), href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/secondary" + appNamePluralAssoc.toLowerCase(), active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");

			
			app.state[appNameAssoc.toLowerCase()].secondary.collection = new appAssoc.Collection;
			app.state[appNameAssoc.toLowerCase()].secondary.collectionView = new app[appNameAssoc].Secondary.Views.CollectionView({collection:app.state[appNameAssoc.toLowerCase()].secondary.collection});

			Instanto.ContainerApp.layout.getRegion("app").show(app.state[appNameAssoc.toLowerCase()].secondary.collectionView);

			var listing = Instanto.request("api:" + appName.toLowerCase() + ":get" + appNameAssoc.toLowerCase() + "secondarycollection", id);
			$.when(listing).done(function(data) {
				app.state.model_id = id;
				app.state[appNameAssoc.toLowerCase()].secondary.collection.add(data[appNameAssoc.toLowerCase() + "_collection"]);
				app.state[appNameAssoc.toLowerCase()].secondary.collectionView.ui.table.tablesorter({cssAsc:"ascending",cssDesc:"descending"});
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when(listing).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		showRelationSecondaryAdd: function(appID, id, appIDAssoc) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/secondary" + appNamePluralAssoc.toLowerCase() +"/add");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:"Secondary " + appNamePluralAssoc.toLowerCase(), href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/secondary" + appNamePluralAssoc.toLowerCase(), active: false},
				{name:"Add", href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/secondary" + appNamePluralAssoc.toLowerCase() + "/add", active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");
			var gettingAll = Instanto.request("api:" + appNameAssoc.toLowerCase() + ":getcollection");
			var gettingPrimaryCollection = Instanto.request("api:" + appName.toLowerCase() + ":get" + appNameAssoc.toLowerCase() + "primarycollection", id);
			var gettingSecondaryCollection = Instanto.request("api:" + appName.toLowerCase() + ":get" + appNameAssoc.toLowerCase() + "secondarycollection", id);
			$.when(gettingAll, gettingPrimaryCollection, gettingSecondaryCollection).done(function(all, primaryCollection, secondaryCollection) {
				app.state.model_id = id;
				var attr = appNameAssoc.toLowerCase() + "_collection";
				all = all[attr] ? all[attr] : [];
				primaryCollection = primaryCollection[attr] ? primaryCollection[attr] : [];
				secondaryCollection = secondaryCollection[attr] ? secondaryCollection[attr] : [];
				var primaryAndSecondaryCollections = [].concat(primaryCollection).concat(secondaryCollection);
				var diff = _.difference(_.pluck(all, "id"), _.pluck(primaryAndSecondaryCollections, "id"));
				var result = _.filter(all, function(obj) { return diff.indexOf(obj.id) >= 0; });
				app.state[appNameAssoc.toLowerCase()].secondary.addView = new app[appNameAssoc].Secondary.Views.AddView({collection: new Backbone.Collection(result)});
				Instanto.ContainerApp.layout.getRegion("app").show(app.state[appNameAssoc.toLowerCase()].secondary.addView);
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			
		},
		/**
		 * showPrimaryAssoc shows a collection of models that belong to app appIDAssoc that has the model referencing by id as their primary
		 * Example: List the articles of a newspaper because every article must have a newspaper 
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 * @param {string} appID - The string to identify the app on the other end of the relationship. Ex: StatusApp or MemberApp
		 */
		showRelationParentCollection: function(appID, id, appIDAssoc) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/" + appNamePluralAssoc.toLowerCase());
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:appNamePluralAssoc, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/" + appNamePluralAssoc.toLowerCase(), active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");

			
			app.state[appNameAssoc.toLowerCase()].collection = new appAssoc.Collection;
			app.state[appNameAssoc.toLowerCase()].collectionView = new app[appNameAssoc].Views.CollectionView({collection:app.state[appNameAssoc.toLowerCase()].collection});

			Instanto.ContainerApp.layout.getRegion("app").show(app.state[appNameAssoc.toLowerCase()].collectionView);

			var listing = Instanto.request("api:" + appName.toLowerCase() + ":get" + appNameAssoc.toLowerCase() + "collection", id);
			$.when(listing).done(function(data) {
				app.state.model_id = id;
				app.state[appNameAssoc.toLowerCase()].collection.add(data[appNameAssoc.toLowerCase() + "_collection"]);
				app.state[appNameAssoc.toLowerCase()].collectionView.ui.table.tablesorter({cssAsc:"ascending",cssDesc:"descending"});
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when(listing).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * showRelationHasCollection 
		 * Example: this is a copy of secondary collection but without the secondary part because there is no primary
		 * The realtionship between partners and members is of thus type 
		 * @param {string} appID - The string to identify the app. Ex: StatusApp or MemberApp
		 * @param {string|int} id - The id to identify the model
		 * @param {string} appID - The string to identify the app on the other end of the relationship. Ex: StatusApp or MemberApp
		 */
		showRelationHasCollection: function(appID, id, appIDAssoc) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/" + appNamePluralAssoc.toLowerCase());
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:appNamePluralAssoc, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/" + appNamePluralAssoc.toLowerCase(), active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");

			
			app.state[appNameAssoc.toLowerCase()].collection = new appAssoc.Collection;
			app.state[appNameAssoc.toLowerCase()].collectionView = new app[appNameAssoc].Views.CollectionView({collection:app.state[appNameAssoc.toLowerCase()].collection});

			Instanto.ContainerApp.layout.getRegion("app").show(app.state[appNameAssoc.toLowerCase()].collectionView);

			var listing = Instanto.request("api:" + appName.toLowerCase() + ":get" + appNameAssoc.toLowerCase() + "collection", id);
			$.when(listing).done(function(data) {
				app.state.model_id = id;
				app.state[appNameAssoc.toLowerCase()].collection.add(data[appNameAssoc.toLowerCase() + "_collection"]);
				app.state[appNameAssoc.toLowerCase()].collectionView.ui.table.tablesorter({cssAsc:"ascending",cssDesc:"descending"});
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
			$.when(listing).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * showRelationHasAdd shows a form to add entities with a has relationship like partners has members
		 */
		showRelationHasAdd: function(appID, id, appIDAssoc) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			Instanto.navigate(appNamePlural.toLocaleLowerCase() + "/" + id + "/" + appNamePluralAssoc.toLowerCase() +"/add");
			Instanto.trigger("app:notification:clean");
			Instanto.trigger("app:breadcrumb:create", [
				{name:appNamePlural, href:"#"+appNamePlural.toLocaleLowerCase(), active: false},
				{name:id, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id, active: false},
				{name:appNamePluralAssoc, href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/" + appNamePluralAssoc.toLowerCase(), active: false},
				{name:"Add", href:"#"+appNamePlural.toLocaleLowerCase() + "/" + id + "/" + appNamePluralAssoc.toLowerCase() + "/add", active: true}
			]);
			
			Instanto.ContainerApp.layout.ui.dimmer.addClass("active");
			var gettingAll = Instanto.request("api:" + appNameAssoc.toLowerCase() + ":getcollection");
			var gettingHasCollection = Instanto.request("api:" + appName.toLowerCase() + ":get" + appNameAssoc.toLowerCase() + "collection", id);
			$.when(gettingAll, gettingHasCollection).done(function(all, hasCollection) {
				app.state.model_id = id;
				var attr = appNameAssoc.toLowerCase() + "_collection";
				all = all[attr] ? all[attr] : [];
				hasCollection = hasCollection[attr] ? hasCollection[attr] : [];
				var diff = _.difference(_.pluck(all, "id"), _.pluck(hasCollection, "id"));
				var result = _.filter(all, function(obj) { return diff.indexOf(obj.id) >= 0; });
				app.state[appNameAssoc.toLowerCase()].addView = new app[appNameAssoc].Views.AddView({collection: new Backbone.Collection(result)});
				Instanto.ContainerApp.layout.getRegion("app").show(app.state[appNameAssoc.toLowerCase()].addView);
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
		},
		
		/**
		 * relationSecondaryAdd
		 */
		relationHasAdd: function(appID, id, appIDAssoc, data) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			app.state[appNameAssoc.toLowerCase()].addView.ui.dimmer.addClass("active");
			var adding = Instanto.request("api:" + appName.toLowerCase() + ":" + appNameAssoc.toLowerCase() +"add", id, data);
			$.when(adding).done(function() {
				Instanto.trigger("app:" + appName.toLowerCase() + ":show" + appNameAssoc.toLowerCase() + "collection", id);
				Instanto.trigger("app:notification:create", "success", appNameAssoc + "  added", "The " + appNameAssoc.toLowerCase() + " #" + data[appNameAssoc.toLowerCase()] + " has been added");
			});
			$.when(adding).fail(function(data) {
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
		},
		
		/** 
		 * relationHasRemove
		 */
		relationHasRemove: function(appID, id, appIDAssoc, data) {
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			var model = app.state[appNameAssoc.toLowerCase()].collection.get(data[appNameAssoc.toLowerCase()]);
			var children = app.state[appNameAssoc.toLowerCase()].collectionView.children;
			var childview = children.findByModel(model);

			childview.$el.addClass("disabled");
			childview.ui.removeButton.addClass("loading");
			
			var removing = Instanto.request("api:" + appName.toLowerCase() + ":" + appNameAssoc.toLowerCase() + "remove", id, data);
			$.when(removing).done(function() {
				childview.$el.removeClass("disabled");
				childview.ui.removeButton.removeClass("loading");
				app.state[appNameAssoc.toLowerCase()].collection.remove(model);
				Instanto.trigger("app:notification:create", "success", appNameAssoc + " removed", "The " + appNameAssoc.toLowerCase() + " #" + data[appNameAssoc.toLowerCase()] + " has been removed from this " + appName.toLowerCase());
			});
			$.when(removing).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		},
		
		/**
		 * relationSecondaryAdd add a entity to the the seoncondary collection.
		 * The pretty name is to override ugly autogenerated names like Financedproject in favour of Financed project
		 * @param opts {map} : {prettyName: "", attr: "", prettyNameAssoc: "", attrAssoc: ""}  
		 */
		relationSecondaryAdd: function(appID, id, appIDAssoc, data, opts) {
			opts = opts ? opts : {};
			opts = {
				prettyName: opts.prettyName || "",
				attr: opts.attr || "",
				prettyNameAssoc: opts.prettyNameAssoc || "",
				attrAssoc: opts.attrAssoc || "",
			};
			
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			app.state[appNameAssoc.toLowerCase()].secondary.addView.ui.dimmer.addClass("active");
			var adding = Instanto.request("api:" + appName.toLowerCase() + ":" + appNameAssoc.toLowerCase() +"secondaryadd", id, data);
			$.when(adding).done(function() {
				Instanto.trigger("app:" + appName.toLowerCase() + ":show" + appNameAssoc.toLowerCase() + "secondarycollection", id);
				Instanto.trigger("app:notification:create", "success", "Secondary " + (opts.prettyNameAssoc ? opts.prettyNameAssoc.toLowerCase() : appNameAssoc.toLowerCase()) +"  added", "The " +  (opts.prettyNameAssoc ? opts.prettyNameAssoc.toLowerCase() : appNameAssoc.toLowerCase()) + " #" + data[opts.attrAssoc ? opts.attrAssoc : appNameAssoc.toLowerCase()] + " has been added");
			});
			$.when(adding).fail(function(data) {
				Instanto.ContainerApp.layout.ui.dimmer.removeClass("active");
			});
		},
		relationSecondaryRemove: function(appID, id, appIDAssoc, data, opts) {
			opts = opts ? opts : {};
			opts = {
				prettyName: opts.prettyName || "",
				attr: opts.attr || "",
				prettyNameAssoc: opts.prettyNameAssoc || "",
				attrAssoc: opts.attrAssoc || "",
			};
			
			var app = Instanto[appID];
			var appName = appID.substr(0, appID.indexOf("App"));
			var appNamePlural = appName + "es";
			
			var appAssoc = Instanto[appIDAssoc];
			var appNameAssoc = appIDAssoc.substr(0, appIDAssoc.indexOf("App"));
			var appNamePluralAssoc = appNameAssoc + "es";
			
			var model = app.state[appNameAssoc.toLowerCase()].secondary.collection.get(data[opts.attrAssoc ? opts.attrAssoc : appNameAssoc.toLowerCase()]);
			var children = app.state[appNameAssoc.toLowerCase()].secondary.collectionView.children;
			var childview = children.findByModel(model);

			childview.$el.addClass("disabled");
			childview.ui.removeButton.addClass("loading");
			
			var removing = Instanto.request("api:" + appName.toLowerCase() + ":" + appNameAssoc.toLowerCase() + "secondaryremove", id, data);
			$.when(removing).done(function() {
				childview.$el.removeClass("disabled");
				childview.ui.removeButton.removeClass("loading");
				app.state[appNameAssoc.toLowerCase()].secondary.collection.remove(model);
				Instanto.trigger("app:notification:create", "success", (opts.prettyNameAssoc ? opts.prettyNameAssoc : appNameAssoc) + " removed", "The " + (opts.prettyNameAssoc ? opts.prettyNameAssoc.toLowerCase() : appNameAssoc.toLowerCase()) + " #" + data[opts.attrAssoc ? opts.attrAssoc : appNameAssoc.toLowerCase()] + " has been removed from this " + (opts.prettyName ? opts.prettyName.toLowerCase() : appName.toLowerCase()) );
			});
			$.when(removing).fail(function(data) {
				if(data.status === 404) {
					Instanto.trigger("app:" + appName.toLowerCase() + ":showcollection");
					Instanto.trigger("app:notification:create", "error", appName + " not found", "The " + appName.toLowerCase() + " #" + id + " has not been found");
				}
			});
		}
	};
	
	Instanto.on("app:util:filter", function(query, attribute, collection, collectionView) {
		return UtilApp.Controller.filter(query, attribute, collection, collectionView);
	});
	Instanto.on("app:util:showcollection", function(appName) {
		return UtilApp.Controller.showCollection(appName);
	});
	Instanto.on("app:util:showcreate", function(appName) {
		return UtilApp.Controller.showCreate(appName);
	});
	Instanto.on("app:util:showcreatewith", function(appName, appNameAssoc) {
		return UtilApp.Controller.showCreateWith(appName, appNameAssoc);
	});
	Instanto.on("app:util:showedit", function(appName, id) {
		return UtilApp.Controller.showEdit(appName, id);
	});
	Instanto.on("app:util:showeditwith", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showEditWith(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:showdetail", function(appName, id) {
		return UtilApp.Controller.showDetail(appName, id);
	});
	Instanto.on("app:util:showdetailwith", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showDetailWith(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:delete", function(appName, id) {
		return UtilApp.Controller.delete(appName, id);
	});
	Instanto.on("app:util:create", function(appName, data) {
		return UtilApp.Controller.create(appName, data);
	});
	Instanto.on("app:util:edit", function(appName, id, data) {
		return UtilApp.Controller.edit(appName, id, data);
	});
	Instanto.on("app:util:updatelogo", function(appName, id, file) {
		return UtilApp.Controller.updateLogo(appName, id, file);
	});
	Instanto.on("app:util:showrelationprimarycollection", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showRelationPrimaryCollection(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:showrelationparentcollection", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showRelationParentCollection(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:showrelationhascollection", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showRelationHasCollection(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:showrelationhasadd", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showRelationHasAdd(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:relationhasadd", function(appName, id, appNameAssoc, data) {
		return UtilApp.Controller.relationHasAdd(appName, id, appNameAssoc, data);
	});
	Instanto.on("app:util:relationhasremove", function(appName, id, appNameAssoc, data) {
		return UtilApp.Controller.relationHasRemove(appName, id, appNameAssoc, data);
	});
	Instanto.on("app:util:showrelationsecondarycollection", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showRelationSecondaryCollection(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:showrelationsecondaryadd", function(appName, id, appNameAssoc) {
		return UtilApp.Controller.showRelationSecondaryAdd(appName, id, appNameAssoc);
	});
	Instanto.on("app:util:relationsecondaryadd", function(appName, id, appNameAssoc, data, opts) {
		return UtilApp.Controller.relationSecondaryAdd(appName, id, appNameAssoc, data, opts);
	});
	Instanto.on("app:util:relationsecondaryremove", function(appName, id, appNameAssoc, data, opts) {
		return UtilApp.Controller.relationSecondaryRemove(appName, id, appNameAssoc, data, opts);
	});
});