import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {sortCurses} from '../actions/index';
import {connect} from 'react-redux';
class PopoverExampleSimple extends React.Component {

  constructor(props) {

    super(props);
     this.handleSort = this.handleSort.bind(this);
    this.state = {
      open: false,

    };

  }
  handleSort = (x) => {
    //console.log(x);
    this.setState({
      sortWord: x,
          });
this.props.sortCurses(this)
  }
  handleTouchTap = (event) => {
    // This prevents ghost click.
    //event.preventDefault();
    console.log("Tap Happens",event);
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {

    return (
        <MuiThemeProvider>
      <div style ={{display:'inline'}}>

        {/* <RaisedButton
          onTouchTap={this.handleTouchTap}
          onClick={this.handleTouchTap}
           className="btn btn-primary" style={{marginLeft: 10, lineHeight:1}}
          label="sort"
        /> */}
        <button type="submit" className="btn btn-primary" style={{marginLeft: 10, lineHeight:1, display: 'inlineBlock', minWidth:82}} onClick={this.handleTouchTap}> Sort     </button>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="score" onClick={()=>{this.handleSort('score')}} />
            <MenuItem primaryText="price" onClick={()=>{this.handleSort('price')}} />
            <MenuItem primaryText="relevance" onClick={()=>{this.handleSort('relevance')}} />
            <MenuItem primaryText="review" onClick={()=>{this.handleSort('review')}} />
          </Menu>
        </Popover>

      </div>
        </MuiThemeProvider>
    );
  }
}
function mapStateToProps(state) {
  return {sortWord: state.sortWord };
}
//export default  connect(mapStateToProps, {sortCurses})(PopoverExampleSimple);
export default connect(mapStateToProps, sortCurses)(PopoverExampleSimple)