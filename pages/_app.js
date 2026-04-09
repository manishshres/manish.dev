import Aos from "aos";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/scss/style.scss";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "../components/switch/ThemeSwitch";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const router = useRouter();

  return (
    <div className="tokyo_tm_all_wrap">
      <ThemeProvider attribute="class">
        <ThemeSwitch />
        <Component {...pageProps} />
      </ThemeProvider>

      <ToastContainer />
    </div>
  );
}
