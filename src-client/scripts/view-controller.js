import React from 'react';
import {Navbar} from './components/component-navbar.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';


export const ViewController = React.createClass({
  getInitalState: function(){
    ACTIONS.navChange(this.props.fromRoute, window.location.hash)
    let storeObj = STORE.getStoreData()
    return storeObj
  },


  render: function(){
    return(
      <div>
        <Navbar {...this.state}/>
      </div>

    )
  }
})
