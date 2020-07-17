import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../ImageResults/ImageResults';


class Search extends Component {

    state = {
        serchText: '',
        amount: 15,
        total: 0,
        apiUrl: 'https://pixabay.com/api',
        apiKey:'17402453-cec9af5ed368943e0b4007c1e',
        images: [],
        
    };
    
    onTextChange = e => {
        const val = e.target.value;
        this.setState({[e.target.name]: val}, () => {

            if(val === '') {
                this.setState({images: []});
            } else { 

                // https://pixabay.com/api/?key=17402453-cec9af5ed368943e0b4007c1e&q=yellow+flowers&image_type=photo

                axios
                .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=
                ${this.state.searchText}&image_type=photo&per_page=${this.state.amount}
                &safesearch=true`
                )
                .then(res => this.setState({total: res.data.total, images: res.data.hits }))
                .catch(err => console.log(err));
                
            }
           
        }); 
       
    };

    onAmountChange = (event, index,value) => this.setState({ amount: value });

    render() {
               
        return (
            <div>
                <br />
                <span>What are you looking for ?</span>
                <TextField 
                name = 'searchText'
                value = {this.state.searchText}
                onChange={this.onTextChange}
                placeholder = 'Serch for images ...'
                fullWidth = {true}
                /> 
                
                <br />
                <span>Pictures on page:</span>
                <br />
                <SelectField 
                name = 'amount'
                placeholder = 'amount'
                value={this.state.amount}
                onChange={this.onAmountChange}
                floatingLabelText="Amount"
                fullWidth = {true}
                >
              
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={50} primaryText="50" />
                
                </SelectField>


                <br />
                <span>Total Pictures : {this.state.total}</span>
                <br />

          {this.state.images.length > 0 ? (<ImageResults images= {this.state.images}/>): null}
                
            </div>
        )
    }
}
export default Search