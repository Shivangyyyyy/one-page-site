import React, { useContext } from "react";
import { ViewportContext } from "./ViewportProvider";

const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  const isMobile = width < 500;
  const isTablet = width < 1030;
  return { width, height, isMobile, isTablet };
};

export default useViewport;