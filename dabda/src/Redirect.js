import { useLocation } from "react-router-dom";

const Redirect = () => {// eslint-disable-line no-unused-vars
  const location = useLocation();
  const { url } = location.state;
  if (url) window.location.href = url;

  return null;
};
export default Redirect;