import React, { useState } from "react";

let FishTableRow = (props) => {
console.log(props);
  let [description, setDescription] = useState(false);

  // Currently, the image being displayed is hardcoded from tinyurl.com
  return (
    <tr onClick={() => setDescription(!description)}>
      <td className="fish-name">{props.fish.name}</td>
      <td>
        <img src={props.fish.image} />
      </td>

      <td className="fish-description">{props.fish.description}</td>
    </tr>
  );
};

export default FishTableRow;
