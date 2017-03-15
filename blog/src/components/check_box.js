import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import {red500, grey50, blue500} from 'material-ui/styles/colors';


const styles = {
  block: {
    maxWidth: 100,
  },
  checkbox: {
    marginBottom: 1,
    width: 100
  },
  iconStyle: {
      color: grey50,
  },
};

const CheckboxExampleSimple = (field) => (
  <div style={styles.block}>
    <MuiThemeProvider>
      <Checkbox
        iconStyle={styles.iconStyle}
        label={field}
        style={styles.checkbox}
        inputStyle={{margin: 0, padding:0}}
        labelStyle	= {{margin: 0, padding:0, width:'100%'}}
      />
    </MuiThemeProvider>

    {/* <Checkbox
      checkedIcon={<ActionFavorite />}
      uncheckedIcon={<ActionFavoriteBorder />}
      label="Custom icon"
      style={styles.checkbox}
    />
    <Checkbox
      checkedIcon={<Visibility />}
      uncheckedIcon={<VisibilityOff />}
      label="Custom icon of different shapes"
      style={styles.checkbox}
    />
    <Checkbox
      label="Disabled unchecked"
      disabled={true}
      style={styles.checkbox}
    />
    <Checkbox
      label="Disabled checked"
      checked={true}
      disabled={true}
      style={styles.checkbox}
    />
    <Checkbox
      label="Label on the left"
      labelPosition="left"
      style={styles.checkbox}
    /> */}
  </div>
);

export default CheckboxExampleSimple;