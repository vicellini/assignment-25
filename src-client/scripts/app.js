import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {ViewController} from './view-controller.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes: {
		'register' : 'showRegisterComponent',
		'login' : 'showLoginComponent',
		'chirps' : 'showChirpsComponent',
		'' : 'showWelcomePageComponent'
	},

	showWelcomePageComponent: function(){
		ReactDOM.render(<ViewController fromRoute={'HOME'}/>, document.querySelector('#app-container'))
	},


})


new AppRouter()
