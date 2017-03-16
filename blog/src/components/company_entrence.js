import React from 'react';
import { Component } from 'react';
import SearchSUB from './search_sub';
import SearchForm from './search_form'
export default class Company extends Component {
  render() {
    console.log(this);
    return (
        <div>
            <div className="streamer">
                <div className="container">
                    <div className="streamer__content">
                        <div className="streamer__headline">Be Able.</div>
                        <div className="streamer__text">From programming to photography, take in-depth online courses and meet any challenge with skill.</div>
                        <SearchSUB />
                    </div>
                </div>
            </div>
            <SearchForm className='tabs'/>

        </div>
        );
  }
}
