
import React, { Component } from 'react';

export default class passArguments extends Component {
    
    state = {
       count: 0
    };
/* 
//only use this if => not applicable called to use the this make sure there is super
    constructor() {
        super();
        this.handleIncrement.bind(this);
    }*/
   
    //function
    handleIncrement = (product) => {
       console.log(product);
    // this.state.count++;
        this.setState({count: this.state.count + 1});
    };

    render() { 
        return (
        <div>
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.handleIncrement({id:1})} 
                className="btn btn-secondary btn-sm"
            >
                Increment
            </button>
        </div>
        );
    }

    //method
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){

        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }

}
