import React, { Component } from 'react'
import Amount from './Amount';
import Declaration from './Declaration';
import Plan from './Plan';
import Review from './Review';

export default class Signup extends Component {

    state = {
        step : 1,
        planType : '', 
        email : '',
        name : '',
        phone : '',
        addressOne : '',
        addressTwo : '',
        pincode : '',
        state : '',
        amount : '',
        declarationOne : '',
        declarationTwo : '',
        declarationThree : '',
        declarationFour : ''
    }
    

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    

  render() {
    
        const { step } = this.state;
        const { 
            planType,
            email,
            name,
            phone,
            addressOne,
            addressTwo,
            pincode,
            state,
            amount,
            declarationOne,
            declarationTwo,
            declarationThree,
            declarationFour } = this.state;
        const values = {  planType,
            email,
            name,
            phone,
            addressOne,
            addressTwo,
            pincode,
            state,
            amount,
            declarationOne,
            declarationTwo,
            declarationThree,
            declarationFour  }

    switch(step) {
        case 1: 
            return (
            <Plan 
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
            />
            )
        case 2: 
            return (
            <Amount 
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
            />
            )
        case 3: 
            return (
                <Declaration 
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                values={ values }
                />
            )
        case 4: 
            return (
                <Review />
            )
        default: 
            // do nothing
        }
  }
}
