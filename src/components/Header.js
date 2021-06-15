import PropTypes from "prop-types";
import { useLocation } from "react-router";
import { Button } from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const isHomeLocation = useLocation().pathname === "/";
  return (
    <header className="header">
      <h1>{title}</h1>
      {isHomeLocation && (
        <Button
          color={showAdd ? "red" : "green"}
          onClick={onAdd}
          text={showAdd ? "Close" : "Add"}
        />
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
