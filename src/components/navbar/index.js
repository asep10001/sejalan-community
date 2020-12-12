import React from "react";
import { Default } from "../../function";
import DesktopView from "../../views/desktopView/desktopView";
import MobileView from "../../views/mobileView/mobileView";


const Navbar = () => {


  return (
    <>
      <Default>
        <DesktopView />
      </Default>
      <MobileView />

    </>
  );
};

export default Navbar;
