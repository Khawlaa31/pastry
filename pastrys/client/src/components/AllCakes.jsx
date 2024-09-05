import axios from "axios";
import React, { useEffect, useState } from "react";
import OneCakes from "./OneCakes";

function AllCakes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/cake/getAll")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [refresh]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="cake-list">
      <h1>Pastries of Cakes</h1>
      {data.length > 0 ? (
        <div className="cake-cards">
          {data.map((element) => (
            <div className="cake-card" key={element.id}>
              <img
                src={element.imageURL}
                alt={element.name}
                className="cake-image"
              />
              <div className="cake-content">
                <h2>{element.name}</h2>
                <p>
                  <strong>Description:</strong> {element.description}
                </p>
                <p>
                  <strong>Type:</strong> {element.type}
                </p>
                <p>
                  <strong>Price:</strong> ${element.price}
                </p>
                <div className="cake-buttons">
                  <OneCakes
                    element={element}
                    refresh={refresh}
                    setRefresh={setRefresh}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No cakes found</p>
      )}
    </div>
  );
}

export default AllCakes;
