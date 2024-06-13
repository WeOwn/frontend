import React, { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Homemob from "./Homemob";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div>{isMobile ? <Homemob /> : <Desktop />}</div>;
};

export default Home;
