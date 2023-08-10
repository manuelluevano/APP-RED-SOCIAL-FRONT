import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <>
      <Link to="/contacts" style={{ fontSize: 44 }}>
        Contacts
      </Link>
      <Link to="/about" style={{ fontSize: 44 }}>
        About
      </Link>
    </>
  );
};

export default Headers;
