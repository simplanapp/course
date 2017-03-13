import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
    console.log("5555555555555555555555555555555555555555555555555555");
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
          onClick={this.handleClose}
      />,
    ];

    return (

      <div>
      <MuiThemeProvider>
        <RaisedButton label="SUBMIT" onTouchTap={this.handleOpen} onClick={this.handleOpen}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
        <Dialog
          title="Submit Your Form"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          you will get an answer in one hour
        </Dialog>
      </MuiThemeProvider>
      </div>
    );
  }
}
