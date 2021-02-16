/* install extension
Simple React Snippets
*/
import React, { Component } from 'react';// shortcut: imrc

//shortcut: cc

/*
React.Fragment only shows the inner command
you can inspect it on browser
*/
/* Hard Coded
class Counter extends Component {
    render() { 
        return (
        <React.Fragment>
            <h1>Hello World</h1>
            <button>Increment</button>
        </React.Fragment>
        );
    }
}
export default Counter;
*/
//using state
export default class EmbedingExpression extends Component {
    
    state = {
       count: 0
    };

    render() { 
        return (
        <div>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </div>
        );
    }
/*   
    formatCount(){
            return this.state.count === 0 ? 'zero' : this.state.count;
        }
        
    //to avoid repeatition use constant
    formatCount(){
        const { count } = this.state;

        return count === 0 ? "zero" : count;
    }
*/

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }

    
}
