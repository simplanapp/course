import React from 'react';
import { Component } from 'react';
import SearchCurses from './search_bar';
import CurseItem from './curse_item'
export default class App extends Component {
  render() {
    //console.log(this);
    return (
      <div >

        {this.props.children}
        {/* <div>

          <SearchCurses  />
            <CurseItem />

        </div>

        <h1>
          gggggggggg
        </h1> */}
      </div>
    );
  }
}
