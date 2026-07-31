import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // ✅ Missing state (this was causing the crash)
  const [active, setActive] = useState("home");

  // Theme
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Active Navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar">

        <div className="logo">
          AJ
        </div>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>

          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>

        </ul>

        <div className="header-buttons">

          <button
            className="theme-toggle"
            onClick={() =>
              setTheme(theme === "light" ? "dark" : "light")
            }
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Header;