
import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {searchCurses,sortCurses} from '../actions/index';
import CurseItem from './curse_item';
import SortButton from './sort_button';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {red500, grey50, blue500} from 'material-ui/styles/colors';

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { term: '' };
//   }
//
//   render() {
//     return (
//       <div className="search-bar">
//         <input
//           value={this.state.term}
//           onChange={event => this.onInputChange(event.target.value)} />
//       </div>
//     );
//   }
//
//   onInputChange(term) {
//     this.setState({term});
//     this.props.onSearchTermChange(term);
//   }
// }
//
// export default SearchBar;
class SearchCurses extends Component{
    constructor(props) {

      super(props);

      this.state = {
        textVisibility: 'visible',
        sortVisibility: 'none',
        containerPosition: 'relative',
      };
      console.log('sortVisibility',this.state.sortVisibility);

    }
    onSubmit(props) {
      console.log('ppprrrooopppss',this.props);
      this.props.searchCurses(props)
      this.setState({
        textVisibility: 'hidden',
        sortVisibility: 'inline-block',
        containerPosition: 'absolute',
      });

    }


    render() {
    // console.log('search_bar',this);
    console.log('sortVisibility',this.state.sortVisibility);
    const { fields: { title }, handleSubmit } = this.props;
    const iconStyles = {
      marginRight: 24,
      marginLeft: 24,
      color: grey50,
    };
    //  console.log(title);
    return (
      <MuiThemeProvider>

      <div className="streamer">
        <div className="container" style={{position: this.state.containerPosition , top:0}}>
              <div className="streamer__content">
                  <div className="streamer__headline" style={{visibility: this.state.textVisibility}} >Be Able.</div>
                  <div className="streamer__text" style={{visibility: this.state.textVisibility}}>From programming to photography, take in-depth online courses and meet any challenge with skill.</div>
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className='streamer-search'>
                      {/* <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}> */}
                      <ActionSearchIcon className="search_icon" style={iconStyles} />
                      <input  type="text" className="streamer-search__field" {...title} placeholder="What do you want to learn?" />
                      <button type="submit" className="search_button btn btn-primary" style={{marginLeft: 10, lineHeight:1}}>search</button>
                      {/* <input  type="text" className="form-control" {...title} style={{width:'50%', display:'inline', margin:2}}/> */}
                      {/* <button type="submit" className="btn btn-primary" style={{marginLeft: 10, lineHeight:1}}>search</button> */}
                      <SortButton visibility={this.state.sortVisibility}/>
                      {/*
                        <a style={{display: 'inline'}}>
                            <input  type="text" className="form-control" {...title} style={{width:'50%', display:'inline', margin:2}}/>
                            <button type="submit" className="btn btn-primary" style={{marginLeft: 10, lineHeight:1}}>search</button>
                            <SortButton visibility={this.state.sortVisibility}/>
                        </a> */}
                      <div className="text-help">
                        {title.touched ? title.error : ''}

                      </div>

                    </div>


                    {/* <button type="submit" className="btn btn-primary">search</button> */}

                  </form>
              </div>
          </div>
      </div>
    </MuiThemeProvider>

    );
  }
}
function mapStateToProps(state) {
  return { curses: state.curses.all };
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title'],

}, null, { searchCurses})(SearchCurses);
