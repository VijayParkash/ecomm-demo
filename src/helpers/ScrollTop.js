import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{props.children}</>;
};

export default ScrollTop;
