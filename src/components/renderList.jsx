/* install extension
Simple React Snippets
*/
import React, { Component } from 'react';// shortcut: imrc

//shortcut: cc
class renderList extends Component {
    
    state = {
       count: 1,
       tags: ['tag1','tag2','tag3']
    };

    //implementing old js
    renderTags(){
        if (this.state.tags.length ===0)return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>
    }
   
    render() { 
   
        return (
            <div> 
                {this.state.tags.length ===0 && "Please create a new tag"}
                {this.renderTags()}
            </div>
        );
    }

}

export default renderList;
