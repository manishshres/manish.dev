import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";

const Navbar = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="nb-navbar">
      <div className="nb-navbar__inner">
        {/* Logo */}
        <Link href="/" className="nb-navbar__logo">
          <Image
            width={130}
            height={20}
            src="/img/logo/dark.png"
            alt="manish.dev"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="nb-navbar__links">
          {sidebarData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routePath}
                className={isActiveLink(item.routePath, router.asPath) ? "active" : ""}
              >
                {item.menuName}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="nb-navbar__controls">
          {/* Theme toggle */}
          {mounted && (
            <button
              className="nb-navbar__theme-btn"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          )}

          {/* Hamburger — mobile only */}
          <button
            className={`nb-navbar__hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nb-navbar__mobile${mobileOpen ? " open" : ""}`}>
        <ul>
          {sidebarData.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routePath}
                className={isActiveLink(item.routePath, router.asPath) ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                {item.menuName}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nb-navbar__mobile-footer">
          <CopyRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
