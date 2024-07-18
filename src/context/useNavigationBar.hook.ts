import { useLocation } from "react-router-dom";

const navbarPaths = ["/", "/home", "/category"]; // Add any other aliases here

const useNavigationBar = (): boolean => {
  const location = useLocation();
  return navbarPaths.some((path) => location.pathname.includes(path));
};

export default useNavigationBar;
