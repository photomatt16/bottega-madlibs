import React, { Component } from 'react';

import Input from './input';
import Content from './content';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
            adjOne: '',
            celebOne: '',
            adjTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjThree: '',
            celebTwo: '',
            celebThree: '',
            adjFour: '',
            nounThree: '',
            celebFour: '',
            adjFive: '',
            contentVisible: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        this.setState({ contentVisible: !this.state.contentVisible })
    }
    render() { 
        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun'},
            {title: 'Adjective', state: this.state.adjOne, name: 'adjOne'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne'},
            
            {title: 'Adjective', state: this.state.adjTwo, name: 'adjTwo'},
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne'},
            {title: 'Number', state: this.state.numberOne, name: 'numberOne'},
            {title: 'Number', state: this.state.numberTwo, name: 'numberTwo'},

            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo'},
            {title: 'Adjective', state: this.state.adjThree, name: 'adjThree'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo'},
            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree'},

            {title: 'Adjective', state: this.state.adjFour, name: 'adjFour'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree'},
            {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour'},
            {title: 'Adjective', state: this.state.adjFive, name: 'adjFive'},

        ]
        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map(data => Input( (data), this.handleInputChange))
                }
                </div>
                <button type="submit">{!this.state.contentVisible ? 'Generate Mad Lib' : 'Clar Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
                
            </form> 
        )
    }
}

export default Card;