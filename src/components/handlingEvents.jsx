/* install extension
Simple React Snippets
*/
import React, { Component } from 'react';// shortcut: imrc

//shortcut: cc
export default class handlingEvents extends Component {
    
    state = {
       count: 1
    };

    handleIncrement(){
        console.log('Increment Clicked');
    }

    render() { 
        return (
        <div>
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

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
