import React from "react";
import FishTableRow from "./FishTableRows.jsx";
import data from "../data/Data.js"
var FishTable = () => {

  return (<table>
    <tbody>
      
   {data.map((e,i)=>{

    return (
      <FishTableRow  fish={e}  />
      )
   })
    }
     
    </tbody>
  </table>)
};

export default FishTable;
