import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const App = ({ setImage }) => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("bangladesh");
  const [error_msg, setErrorMsg] = useState("");


  useEffect(() => {
    onSearchSubmit(term);
  }, []);


  const onSearchSubmit = (term) => {
    setTerm(term);

    fetch("https://api.unsplash.com/search/photos/?query=" + term, {
      method: "GET",
      headers: {
        Authorization: "Client-ID R4Q_V32stbrWOzb3DpOntSfstan64mljhm-QftIjSCY",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // console.log("here");
          return response.json();
        } else throw "Something went wrong";
      })
      .then((response) => {
        setImages(response.results);
      })
      .catch((err) => {
        setErrorMsg(err);
      });
  };

  const renderContent = () => {
    if (!error_msg) {
      return <ImageList images={images} setImage={setImage} />;
    } else {
      return (
        <h2
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "red",
          }}
        >
          {error_msg}
        </h2>
      );
    }
  };

  return (
    <div>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <h4>Found: {images.length} Images</h4>
      {renderContent()}
    </div>
  );
};

export default App;
