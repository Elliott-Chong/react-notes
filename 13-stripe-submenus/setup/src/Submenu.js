import React, { useState, useRef, useEffect } from "react";
import useGlobalContext from "./context";

const Submenu = () => {
  const submenuRef = useRef(null);

  const { state } = useGlobalContext();

  useEffect(() => {
    submenuRef.current.style.left = `${state.sidebarLocation.center}px`;
    submenuRef.current.style.top = `${state.sidebarLocation.bottom}px`;
  }, [state.sidebarLocation]);
  return (
    <aside
      className={`submenu ${state.isSidemenuOpen && "show"}`}
      ref={submenuRef}
    >
      <section>
        <h4>{state.sidebarText}</h4>
        <div className={`submenu-center col-${state.links.length}`}>
          {state.links.map((link) => {
            return (
              <a href={link.url}>
                {link.icon}
                {link.label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
