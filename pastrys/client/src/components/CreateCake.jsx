import axios from "axios";
import React, { useState } from "react";

const CreateCake = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null); // Add error state

  const created = () => {
    axios
      .post("http://localhost:4000/cake/add", {
        name: name,
        imageURL: imageURL,
        description: description,
        price: price,
        type: type,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error("Error creating cake:", err); // Log the error
        setError(err.message); // Set error state
      });
  };

  return (
    <div className="create-cake-form">
      <h2>Create New Cake</h2>
      {error && <p className="error">Error: {error}</p>} {/* Display error */}
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter cake name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="imageURL">Image URL:</label>
        <input
          type="text"
          id="imageURL"
          placeholder="Enter image URL"
          onChange={(e) => setImageURL(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          placeholder="Enter cake description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Enter cake price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          placeholder="Enter cake type"
          onChange={(e) => setType(e.target.value)}
        />
      </div>{" "}
      {/* Add missing closing div tag */}
      <button onClick={created}>Create Cake</button>
    </div>
  );
};

export default CreateCake;
