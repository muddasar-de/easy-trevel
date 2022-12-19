import React from "react";
import useStyles from "./styles";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Rating } from "@material-ui/lab";
const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.deliveryhero.io/image/fd-pk/LH/v3ok-hero.jpg?width=4000&height=1000&quality=45"
        }
        title={place.name}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place?.rating)} readOnly />
          <Typography variant="subtitle1">
            Out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award, index) => (
          <Box display="flex" justifyContent="space-between" key={index}>
            <img src={award.images?.small} alt={award.display_name} />
            <Typography gutterBottom variant="subtitle1" my={1}>
              {award?.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            className={classes.chip}
          ></Chip>
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place?.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place?.website, "_blank")}
          >
            Visit Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
