import axios from "axios";
import React, { useState } from "react";

const OneCakes = ({ element, refresh, setRefresh }) => {
  const [show, setshow] = useState(true);

  const fasekh = (id) => {
    axios
      .delete(`http://localhost:4000/cake/delete/${id}`)
      .then((response) => {
        console.log(response);
        setshow(false);
        setRefresh(!refresh); // Hide the component after deletion
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (!show) return null; // Don't render the component if show is false

  return (
    <div>
      <button onClick={() => fasekh(element.id)}>Delete</button>
    </div>
  );
};

export default OneCakes;
