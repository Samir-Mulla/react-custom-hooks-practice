import {useState, useEffect} from "react";

function useDimensions() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  function handleDimensions() {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }
  useEffect(() => {
    window.addEventListener("resize", handleDimensions);
    return () => {
      window.removeEventListener("resize", handleDimensions);
    };
  }, []);
  return dimensions;
}

export default useDimensions;
