import React, { Component } from "react";
import PropTypes from 'prop-types';

class  Mercury extends Component {
 
    constructor(props){
        super(props);
        this.state={
            currentTemp:23
        }; 
    }

    render(){
        var stateOfWater;

        if (this.state.currentTemp <= -40) {
            stateOfWater = 'solid';
        } else if (this.state.currentTemp >= 356) {
            stateOfWater = 'Gas';
        } else {
            stateOfWater = 'Liquid';
        }

        return(
            <div>
                <p>
                    At {this.state.currentTemp} degrees Celsius,
                    Mercury is considered to be a "{stateOfWater}" state Of Water.
                    symbol : {this.props.symbol}
                </p>
            </div>
        );
    }
}

Mercury.defaultProps ={
    symbol : "Not Available" 
}

Mercury.propTypes ={
    symbol : PropTypes.string
}
export default Mercury;


