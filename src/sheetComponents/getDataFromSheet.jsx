import React, { useEffect, useState,Fragment } from "react";
import Tabletop from "tabletop";

export default function GetDataFromSheets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1cLmzzwk_j2vT3AK_GcGEThuQW75xyWYpDTdjS1Q0oGQ",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);
  
  const viewData = <>
        
        <h1>data from google sheets</h1>
        <ul>
          {data.map((item, i) => (
            <Fragment key={i}>
              <li>Character -- {item.Char}</li>
              <li>Zhuyin - {item.Zhuyin}</li>
              <li>English - {item.Eng}</li>
              <br />
            </Fragment>
          ))}
        </ul>
  </>;

 
return (viewData);
}
