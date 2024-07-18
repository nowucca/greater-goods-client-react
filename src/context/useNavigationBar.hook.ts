import { useLocation } from "react-router-dom";

const navbarPaths = ["/home", "/category"]; // Add any other aliases here

const useNavigationBar = (): boolean => {
  const location = useLocation();
  const baseUrl = import.meta.env.BASE_URL || "";

  // Remove the base URL from the pathname
  const relativePath = location.pathname.startsWith(baseUrl)
    ? location.pathname.slice(baseUrl.length)
    : location.pathname;

  return (
    relativePath === "/" ||
    navbarPaths.some((path) => relativePath.startsWith(path))
  );
};

export default useNavigationBar;
