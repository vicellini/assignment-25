import Backbone from 'backbone';
import {UserModel} from './models/model-user.js'
import {STORE} from './store.js'


export const ACTIONS = {

  navChange: function(selectedAppRoute, hashRoute){
		STORE.setStore('currentNavRoute', selectedAppRoute)
		window.location.hash = hashRoute
	}

}
