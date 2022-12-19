import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Box, Paper, Typography, useMediaQuery } from "@material-ui/core";
// import LocationOnOutlinedIcon from "@material-ui/icons-material/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Rating } from "@material-ui/lab";

// import Rating from "@material-ui/lab ";
import useStyles from "./styles";
const Map = ({
  places,
  coordinates = { lat: 0, lng: 0 },
  setBounds,
  setCoordinates,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [child, setChild] = useState();
  // const coordinates = { lat: 14.70601, lng: 121.086983 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "ADD_YOUR_OWN_GOOGLE_API_KEY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={""}
        onChange={(e) => {
          console.log("e", e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({
            ne: { lat: e.marginBounds.ne.lat, lng: e.marginBounds.ne.lng },
            sw: { lat: e.marginBounds.sw.lat, lng: e.marginBounds.sw.lng },
          });
        }}
        // onChildClick={""}
      >
        {places?.map((place, index) => (
          <div
            className={classes.markerContainer}
            key={index}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            {!isDesktop ? (
              <LocationOnIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.typography}
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://images.deliveryhero.io/image/fd-pk/LH/v3ok-hero.jpg?width=4000&height=1000&quality=45"
                  }
                />
                <Rating size="small" value={Number(place?.rating)} readOnly />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
