/* eslint-disable linebreak-style */
import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import styled from "styled-components";

const Region = styled.section`
    flex: auto;
    width: 100%;
    height: 100%;
`;

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibGl6Z2FsbGFnaGVyIiwiYSI6ImNqcHZpNm0xNjAxaTMzeG80eWRjcWxscnYifQ.HB1ie-iccCc1TlpKJXUZKw",
});

const v1 = [-74.006, 40.7128];

function Mapbox() {
  return (
    <Region>
      <Map
        style="mapbox://styles/lizgallagher/cjvwt6yv316cl1cpgoj94jvma?optimize=true"
        center={v1}
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
      />
    </Region>
  );
}

export default Mapbox;
