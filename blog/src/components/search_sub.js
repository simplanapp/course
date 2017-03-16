
import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import {searchCursesSub} from '../actions/index';
import CurseItem from './curse_item'
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {red500, grey50, blue500} from 'material-ui/styles/colors';

class SearchSUB extends Component{
onSubmit(props) {
    this.props.searchCursesSub(props)

  }



  render() {
    //console.log(this.props);

    const { fields: { title }, handleSubmit } = this.props;
    const iconStyles = {
      marginRight: 24,
      marginLeft: 24,
      color: grey50,
    };
    //  console.log(title);
    return (
        <MuiThemeProvider>
          {/* <div className="streamer-search"> */}
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="streamer-search">
                    <ActionSearchIcon className="search_icon" style={iconStyles} />
                    <input  type="text" className="streamer-search__field" placeholder="What do you want to learn?" {...title} />
                    <button type="submit" className="search_button btn btn-primary" style={{marginLeft: 10, lineHeight:1}}>search</button>


                <div className="text-help">
                {title.touched ? title.error : ''}

              </div>
            </div>



                {/* <button type="submit" className="btn btn-primary">search</button> */}

            </form>
          {/* </div> */}
        </MuiThemeProvider>
    );


//style={{width:'50%', display:'inline', margin:2}}

//    return (
//          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
//
//
//            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
//
//                    <input  type="text" className="form-control" {...title} style={{width:'50%', display:'inline', margin:2}}/>
//                    <button type="submit" className="btn btn-primary" style={{marginLeft: 10, lineHeight:1}}>search</button>
//
//
//              <div className="text-help">
//                {title.touched ? title.error : ''}
//
//              </div>
//
//            </div>
//
//
//            {/* <button type="submit" className="btn btn-primary">search</button> */}
//
//          </form>
//        );
  }
  }
  function mapStateToProps(state) {
  return { sub: state.sub.all };
  }

  // connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
  // reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
  export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title'],

}, null, { searchCursesSub })(SearchSUB);
