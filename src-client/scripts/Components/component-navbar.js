import React from 'react'
import {ACTIONS} from '../actions.js'

export const Navbar = React.createClass({

 _createNavJSX: function(currentNavRoute){
    let routeList = [
      {appRoute : 'HOME', displayText : 'Home', hashRoute: '' },
      {appRoute : 'CHIRPS', displayText : 'Chirps', hashRoute: 'chirps' },
      {appRoute : 'LOGIN', displayText : 'Log In', hashRoute: 'login' },
      {appRoute : 'SIGN UP', displayText : 'Sign Up', hashRoute: 'signup' },
    ]

    let navComponents = routeList.map(function(eachObj, i){
      return <SingleRoute {...eachObj}
              key = {i}
              currentRoute = {currentNavRoute}/>
    })
    return navComponents
  },

  render: function(){
    return(
      <nav>
        {this._createNavJSX(this.props.currentNavRoute)}
      </nav>
    )
  }

})

const SingleRoute = React.createClass({
  _handleNavClick: function(){
    console.log('wired up')
  },

  render: function(){
    let navOptionClassName = 'nav-option'
      if(this.props.appRouteName === this.props.currentRoute){
         navOptionClassName = 'nav-option nav-option--active'
      }
      return <div className={navOptionClassName} onClick={_handleNavClick}>
              {this.props.eachObj.displayText}
            </div>
    },

})
