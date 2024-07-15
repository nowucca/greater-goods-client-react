// useIsHomePage.ts
import { useLocation } from "react-router-dom";

const homePaths = ["/", "/home"]; // Add any other aliases here

const useIsHomePage = (): boolean => {
  const location = useLocation();
  return homePaths.includes(location.pathname);
};

export default useIsHomePage;
