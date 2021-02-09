/* install extension
Simple React Snippets
*/
import React, { Component } from 'react';// shortcut: imrc

//shortcut: cc
class Counter extends Component {
    
    state = {
       count: 0
    };

    /*render class dinamicly
    <div>
            <span className="badge badge-warning m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
    </div>
    */

    render() { 
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";

        return (
        <div>
            {classes}
            <span className={classes}>{this.formatCount()}</span>
            <span className="badge badge-warning m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    formatCount(){

        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }

}
export default Counter;