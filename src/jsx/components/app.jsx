import React, { Component } from "react";

import AppInner from "./appInner.jsx";

class  AppComp extends Component {
  
    render() {
        return (
            <div>
                {this.props.greeting}
                {' '} The Time is {' '} {this.props.now}
            <h1>Hello World</h1>
            <h2>Hello World BHOJ</h2>
            <AppInner />
            </div>                        
        );
      }
};

export default AppComp;




