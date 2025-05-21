import { useEffect, useState } from "react";

function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 768); //taiwind ko md breakpoint
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return isSmallScreen;
}

export default useIsSmallScreen;
