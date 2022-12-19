import axios from "axios";
const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlaces = async (ne, sw) => {
  const {
    data: { data },
  } = await axios.get(URL, {
    params: {
      bl_latitude: sw?.lat,
      tr_latitude: ne?.lat,
      bl_longitude: sw?.lng,
      tr_longitude: ne?.lat,
      // restaurant_tagcategory_standalone: "10591",
      // restaurant_tagcategory: "10591",
      // limit: "30",
      // currency: "USD",
      // open_now: "false",
      // lunit: "km",
      // lang: "en_US",
    },
    headers: {
      "X-RapidAPI-Key": "52987b7be5msh861e46e0f14a806p117db8jsn1e888d810706",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  });
  return data;
};
