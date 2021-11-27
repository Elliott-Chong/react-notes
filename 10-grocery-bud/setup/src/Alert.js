import React from "react";

const Alert = ({ alert, alertType }) => {
  return <p className={`alert ${alert && alertType}`}>{alert}</p>;
};

export default Alert;
