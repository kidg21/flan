/* eslint-disable linebreak-style */
import React from "react";
import ReactMapboxGl from "react-mapbox-gl";

const container = ({
  height: "100%",
  width: "100%",
});

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibGl6Z2FsbGFnaGVyIiwiYSI6ImNqcHZpNm0xNjAxaTMzeG80eWRjcWxscnYifQ.HB1ie-iccCc1TlpKJXUZKw",
});

const map = ({
  style: "mapbox://styles/lizgallagher/cjvwt6yv316cl1cpgoj94jvma?optimize=true",
});

const v1 = [-74.006, 40.7128];

function Mapbox() {
  return (
    <Map
      containerStyle={container}
      style={map.style}
      center={v1}
    />
  );
}

export default Mapbox;
