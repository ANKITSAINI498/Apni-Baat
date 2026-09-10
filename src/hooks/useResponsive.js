import { useEffect, useState } from "react";
export default function useResponsive() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const f = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return mobile;
}
