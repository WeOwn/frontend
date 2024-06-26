import React, { useEffect, useState } from "react";
import Footermob from "./Footermob.jsx";
import Footerlarge from "./Footerlarge.jsx";

const Footer = () => {
  const [mobsize, setMobSize] = useState(false);

  const handleresize = () => {
    if (window.innerWidth <= 768) setMobSize(true);
    else setMobSize(false);
  };

  useEffect(() => {
    handleresize();
    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  });
  return <>{mobsize ? <Footermob /> : <Footerlarge />}</>;
};

export default Footer;
