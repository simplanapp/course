
import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {searchCurses,sortCurses} from '../actions/index';
import CurseItem from './curse_item';
import SortButton from './sort_button';
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
    onSubmit(props) {
        this.props.searchCurses(props)

    }


    render() {
    console.log('search_bar',this);

    const { fields: { title }, handleSubmit } = this.props;
    //  console.log(title);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>


        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <a style={{display: 'inline'}}>
                <input  type="text" className="form-control" {...title} style={{width:'50%', display:'inline', margin:2}}/>
                <button type="submit" className="btn btn-primary" style={{marginLeft: 10, lineHeight:1}}>search</button>
                <SortButton />
            </a>
          <div className="text-help">
            {title.touched ? title.error : ''}

          </div>

        </div>


        {/* <button type="submit" className="btn btn-primary">search</button> */}

      </form>
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

}, null, { searchCurses, sortCurses})(SearchCurses);
