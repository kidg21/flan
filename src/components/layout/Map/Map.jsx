/* eslint-disable linebreak-style */
import React from "react";
import PropTypes from "prop-types";
import ReactMapboxGl from "react-mapbox-gl";

const container = ({
  height: "100%",
  width: "100%",
  minHeight: "10em",
});

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibGl6Z2FsbGFnaGVyIiwiYSI6ImNqcHZpNm0xNjAxaTMzeG80eWRjcWxscnYifQ.HB1ie-iccCc1TlpKJXUZKw",
});

const styleHash = {
  "streets": {
    style: "mapbox://styles/mapbox/streets-v11",
  },
  "outdoors": {
    style: "mapbox://styles/mapbox/outdoors-v11",
  },
  "light": {
    style: "mapbox://styles/mapbox/light-v10",
  },
  "satellite": {
    style: "mapbox://styles/mapbox/satellite-v9",
  },
  "satellite-streets": {
    style: "mapbox://styles/mapbox/satellite-streets-v11",
  },
  "dark": {
    style: "mapbox://styles/mapbox/dark-v10",
  },
  "custom": {
    style: "mapbox://styles/lizgallagher/cjvwt6yv316cl1cpgoj94jvma?optimize=true",
  },
};

function Mapbox({
  center, id, map, zoom,
}) {
  const selectedStyle = styleHash[map && map.toLowerCase()] || styleHash.custom;
  const { style } = selectedStyle;

  return (
    <Map
      center={center}
      containerStyle={container}
      id={id}
      style={style}
      zoom={zoom}
    />
  );
}

Mapbox.propTypes = {
  center: PropTypes.node,
  id: PropTypes.string,
  /** Options: 'streets', 'outdoors', 'light', 'dark', 'satellite', 'satellite-streets', 'custom' */
  map: PropTypes.oneOf(["streets", "outdoors", "light", "dark", "satellite", "satellite-streets", "custom"]),
  zoom: PropTypes.integer,
};
Mapbox.defaultProps = {
  center: [-74.006, 40.7128],
  id: null,
  map: "custom",
  zoom: [9],
};

export default Mapbox;
