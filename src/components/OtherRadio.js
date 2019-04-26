import React, { Component } from "react";
import { FormControlLabel, 
  Radio, 
  TextField,
  MenuItem,
} from "@material-ui/core";

export default class OtherRadio extends Component {
  render() {
    const currencies = [
      {
        value: 'USD',
        label: '$',
      },
      {
        value: 'EUR',
        label: '€',
      },
      {
        value: 'BTC',
        label: '฿',
      },
      {
        value: 'JPY',
        label: '¥',
      },
    ];

    return (
      <FormControlLabel
        value={this.props.value}
        onChange={this.props.onChange}
        checked={this.props.checked}
        control={<Radio />}
        label={

        <TextField
          id="standard-bare"
          select
          label="Select"
          value={this.props.placeholder}
          onChange={this.props.onTextChange}
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        }
      />
    );
  }
}
