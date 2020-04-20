import React, { Component } from "react";

class  AppInner extends Component {
    render() {
        return (
            <div>
            <h1>Hello World Inner</h1>
            <h2>Hello World BHOJ Inner</h2>
            {this.result()}
            {this.math()}
            </div>
        );
      }

      result(){
          if ("one"=="one") {
              var message=<h1>YES</h1>
          } else {
            message=<h1>NO</h1>
          }

          return message;
      }

      math(){
        
            var message=<h1>
                {"a+b"}<sup>2</sup>{"="}
                {"a"}<sup>2</sup>{"+2ab+"}{"b"}<sup>2</sup>
            </h1>
        

        return message;
    }
}

export default AppInner;


