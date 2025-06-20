import React from "react";
import PropTypes from "prop-types";

function WelcomeMessage({
  name,
  children,
}: {
  name: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      {children}
    </div>
  );
}

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default WelcomeMessage;
