import React from 'react';
import { Component } from 'react';
import SearchCurses from './search_bar';
import CurseItem from './curse_item'
export default class Clients extends Component {
  render() {
    //console.log(this);
    return (
      <div >



          <SearchCurses  />
            <CurseItem className='tabs'/>


      </div>
    );
  }
}
