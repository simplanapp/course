import React from 'react';
import { Component } from 'react';
import SearchSUB from './search_sub';
import SearchForm from './search_form'
export default class Company extends Component {
  render() {
    console.log(this);
    return (
      <div >



          <SearchSUB  />
            <SearchForm className='tabs'/>


      </div>
    );
  }
}
