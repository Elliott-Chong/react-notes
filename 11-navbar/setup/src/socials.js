import React from "react";

const socials = ({ socials }) => {
  return (
    <ul className="social-icons">
      {socials.map((social) => {
        return (
          <li key={social.id}>
            <a href={social.url}>{social.icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default socials;
