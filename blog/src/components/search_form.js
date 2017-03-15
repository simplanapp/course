//import { AppRegistry, View } from 'react-native';
//import React, { Component } from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Se } from '../actions/index';
import { Link } from 'react-router';
import { fetchPosts, searchCurses } from '../actions/index';
import CheckboxExampleSimple from './check_box';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FlatButton from 'material-ui/FlatButton';
import  DialogButton from './action_button';
const style = {
  marginLeft: 20,
};




class SearchForm  extends Component {
  constructor(props){
      super(props);
      //this.state=this;
    }
    renderCurses() {
      return this.props.sub.all.map((curse) => {
        console.log(curse);
        return (

          <a className='checkBox'>

            {CheckboxExampleSimple(curse)}
          </a>
        )
      })
      }

    render() {
        console.log('7777777777');
        console.log(this.props.sub);
        const {sub} = this.props;
        console.log(sub);
        if (sub.all.length==0) {
            return <div></div>;
        }

        return (
            <div>
                <MuiThemeProvider>
                    <Paper zDepth={2} style={{ 'background-color': 'rgba(255, 255, 255, 0.85)'}}>
                        <Divider style={{ 'background-color': '#7f7f7f'}}/>
                        <Divider style={{ 'background-color': '#7f7f7f'}}/>
                        <grid>
                            <row>
                                <h3 className='categories'>Related</h3>
                                <row style={{ display: 'inline-block', marginLeft:100}}>
                                    {this.renderCurses()}
                                </row>
                            </row>
                            <Divider style={{ 'background-color': '#7f7f7f'}}/>
                            <row>
                                <h3 className='categories'>Course Level</h3>
                            </row>

                            <row style={{ display: 'inline-flex', marginLeft:100}}>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Beginer')}
                                </a>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Intermediate')}
                                </a>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Advanced')}
                                </a>
                            </row>
                            <Divider style={{ 'background-color': '#7f7f7f'}}/>
                            <row>
                                <h3 className='categories'>Price</h3>
                            </row>
                            <row style={{ display: 'inline-flex', marginLeft:100}}>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Free')}
                                </a>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Partial Free')}
                                </a>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Paid')}
                                </a>
                            </row>
                            <Divider style={{ 'background-color': '#7f7f7f'}}/>
                            <row>
                                <h3 className='categories'>Test Methods</h3>
                            </row>
                            <row style={{ display: 'inline-flex', marginLeft:100}}>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Quizzes')}
                                </a>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('Coding exercises')}
                                </a>
                                <a className='checkBox'>
                                {CheckboxExampleSimple('test')}
                                </a>
                            </row>
                            <Divider style={{ 'background-color': '#7f7f7f'}}/>
                        </grid>
                        <TextField hintText="Email address" style={style} underlineShow={true} underlineStyle={{borderColor: '#000'}} underlineFocusStyle={{borderColor: '#000'}} />
                        {/* <FlatButton label="Sumbit" primary={true} /> */}
                        <Divider style={{ 'background-color': '#7f7f7f'}}/>

                        <DialogButton  />
                    </Paper>
                </MuiThemeProvider>
            </div>



            )}
}

function mapStateToProps({ sub }) {
  return {sub};
}

export default connect(mapStateToProps)(SearchForm);
