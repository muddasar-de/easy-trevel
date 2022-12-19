import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { getPlaces } from "./api";
import { useEffect, useState } from "react";
function App() {
  const [places, setPlaces] = useState();
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates({ lat: latitude, lng: longitude })
    );
  }, []);
  useEffect(() => {
    getPlaces(bounds?.ne, bounds?.sw).then((data) => setPlaces(data));
  }, [coordinates, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={5} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
