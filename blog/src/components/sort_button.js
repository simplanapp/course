import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {sortCurses} from '../actions/index';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
class PopoverExampleSimple extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      open: false,

    };
//this.sortCurses = this.sortCurses.bind(this);
this.handleSort= this.handleSort.bind(this);
  }
  handleSort = (x) => {
    //console.log(x);
    this.setState({
      sortWord: x,
          });
          this.props.curses.sortWord=x;
          this.props.sortCurses(this.props.curses)
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
  console.log(this);
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
            <MenuItem primaryText="relevance" onClick={()=>{this.handleSort('relevance')}} />
            <MenuItem primaryText="price low to high" onClick={()=>{this.handleSort('price_low_to_high')}} />
            <MenuItem primaryText="price high to low" onClick={()=>{this.handleSort('price_high_to_low')}} />
            <MenuItem primaryText="review" onClick={()=>{this.handleSort('review')}} />
          </Menu>
        </Popover>

      </div>
        </MuiThemeProvider>
    );
  }
}
function mapStateToProps(state) {
  return {curses: state.curses };
}
function mapDispatchToProps(dispatch) {
   return bindActionCreators({ sortCurses }, dispatch);}
//export default  connect(mapStateToProps, {sortCurses})(PopoverExampleSimple);
export default connect(mapStateToProps, mapDispatchToProps)(PopoverExampleSimple)
