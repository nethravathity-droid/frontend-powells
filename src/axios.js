import axios from "axios";
const fetchProperties = async () => {
  const res = await axios.get("hhttps://powells-backend-1.onrender.com/api/properties");
  return res.data;
};

