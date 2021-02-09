/* install extension
Simple React Snippets
*/
import React, { Component,Fragment } from 'react';// shortcut: imrc
import GetDataFromSheets from './getDataFromSheet';

//shortcut: cc
class Counter extends Component {

  render() { 
    const viewAll = 
    <>
          <h1>data from google sheets</h1>
          <ul>
            {GetDataFromSheets.map((item, i) => (
              <Fragment key={i}>
                <li>Character -- {item.Char}</li>
                <li>Zhuyin - {item.Zhuyin}</li>
                <li>English - {item.Eng}</li>
                <br />
              </Fragment>
            ))}
          </ul>
    </>;
    return viewAll;
  }
  


}
export default Counter;