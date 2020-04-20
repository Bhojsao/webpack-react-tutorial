import React, { Component } from "react";

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
                </p>
            </div>
        );
    }
}

export default Mercury;


