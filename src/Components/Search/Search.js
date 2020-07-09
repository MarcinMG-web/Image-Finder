import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Search extends Component {

    state = {
        serchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api/',
        apiKey:'', //Add key
        images:[],
    }

    render() {
        return (
            <div>
                <TextField 
                name = 'serchText'
                value = {this.state.searchText}
                onChanege = {this.onTextChange}
                // floatingLabelText = 'Serch for images ...'
                placeholder = 'Serch for images ...'
                fullWidth = {true}
                /> 
                
                <br />
                <SelectField 
                name = 'amount'
                floatingLabelText = 'Amount'
                // labelId="demo-simple-select-label"
                value={this.state.amount}
                onChange={this.onAmountChange}
                >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={50}>50</MenuItem>

                </SelectField>
                
            </div>
        )
    }
}
export default Search