import React from "react";
import "../../Styles/Explore/Map.css"

const Map = () => {
  return (
    <div className="Map-container">
      <iframe
        src="https://app.mapline.com/map/map_227b2215/N0lWc25IOEhWUHh1S2Q1Z3VBcVdGUnRKajRHYjl4bmVDQXBzZm"
        style={{width:"80%", height:"700px"}}
        allow="geolocation *"
      ></iframe>
    </div>
  );
};

export default Map;
