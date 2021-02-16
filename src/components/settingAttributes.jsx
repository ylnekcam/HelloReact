/* install extension
Simple React Snippets
*/
import React, { Component } from 'react';// shortcut: imrc

//shortcut: cc
class setAttributes extends Component {
    
    state = {
       count: 1,
    };
 /*
 //adding styles
    styles ={
        fontSize: 50,
        fontWeight: 'bold' 
    };

    render() { 
        return (
        <div>
            <span style= {this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }
 */   
//adding styles ussing {{}}
    render() { 
        return (
        <div>
            <span style= {{fontSize:50}} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
        </div>
        );
    }

    formatCount(){

        const { count } = this.state;
        return count === 0 ? "zero" : count;
    }

}
export default setAttributes;