import React, { useState, useRef, useEffect } from "react";
import { categoriesDatas } from "./categories/categories";

const CRYPTO_IDS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana" },
  { id: "binancecoin", symbol: "BNB", name: "BNB" },
];

let cryptoInitialFetchDone = false;

function App() {
  const [categories] = useState(categoriesDatas);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      return saved === "light" || saved === "dark" ? saved : "dark";
    } catch {
      return "dark";
    }
  });
  const [tickers, setTickers] = useState([]);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = CRYPTO_IDS.map((c) => c.id).join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
        );
        const data = await res.json();
        setTickers(
          CRYPTO_IDS.map(({ id, symbol, name }) => ({
            symbol,
            name,
            price: data[id]?.usd ?? 0,
            change: data[id]?.usd_24h_change ?? 0,
          }))
        );
      } catch {
        setTickers(
          CRYPTO_IDS.map(({ symbol, name }) => ({
            symbol,
            name,
            price: 0,
            change: 0,
          }))
        );
      }
    };
    if (!cryptoInitialFetchDone) {
      cryptoInitialFetchDone = true;
      fetchPrices();
    }
    const interval = setInterval(fetchPrices, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
    setSidebarOpen(false);

    const element = document.getElementById(category.id);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen((open) => !open);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainContentRef.current) return;

      const scrollPosition = mainContentRef.current.scrollTop;
      let currentActiveCategory = categories[0].id;

      for (const category of categories) {
        const element = document.getElementById(category.id);
        if (
          element &&
          element.offsetTop <=
            scrollPosition + mainContentRef.current.offsetHeight / 2
        ) {
          currentActiveCategory = category.id;
        }
      }

      setActiveCategory(currentActiveCategory);
    };

    if (mainContentRef.current) {
      mainContentRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainContentRef.current) {
        mainContentRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [categories]);

  return (
    <div className="app-root">
      <div className="app-backdrop" />

      <div className="app-layout">
        <button className="menu-icon" onClick={toggleSidebar} aria-label="Toggle navigation">
          <span>☰</span>
        </button>

        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={toggleSidebar}
            aria-hidden
          />
        )}

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <img src="/logo.png" alt="Web3 Atlas" className="brand-logo" />
            <div className="sidebar-title">
              <span className="sidebar-title-main">Web3 Atlas</span>
              <span className="sidebar-title-sub">导航你的链上工具宇宙</span>
            </div>
          </div>

          <div className="sidebar-divider" />

          <div className="sidebar-caption">Categories</div>

          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className={`category-item ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="sidebar-footer">
            <span className="sidebar-pill">
              {categories.reduce((acc, c) => acc + c.tools.length, 0)} tools
            </span>
            <span>Curated for builders</span>
          </div>
        </aside>

        <div className="content-wrapper">
          <header className="app-header">
            <div className="app-header-main">
              <h1 className="app-title">Web3 Navigation</h1>
              <p className="app-subtitle">
                精选链上工具、社区与服务，一站式快速直达。
              </p>
            </div>

            <div className="crypto-tickers">
              {tickers.map((t) => (
                <div key={t.symbol} className="crypto-ticker">
                  <span className="crypto-ticker-symbol">{t.symbol}</span>
                  <span className="crypto-ticker-price">
                    {t.price
                      ? `$${t.price >= 1 ? t.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : t.price.toFixed(4)}`
                      : "—"}
                  </span>
                  <span
                    className={`crypto-ticker-change ${t.change >= 0 ? "up" : "down"}`}
                  >
                    {t.price ? `${t.change >= 0 ? "+" : ""}${t.change?.toFixed(2)}%` : ""}
                  </span>
                </div>
              ))}
            </div>

            <div className="app-header-meta">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
              >
                <span className="theme-toggle-icon" aria-hidden>
                  {theme === "dark" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                      <circle cx="12" cy="12" r="3.5" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </header>

          <main className="main-content" ref={mainContentRef}>
            <div className="main-content-inner">
              {categories.map((category) => (
                <section key={category.id} id={category.id}>
                  <div className="category-section-header">
                    <h2 className="category-title">{category.title}</h2>
                    <span className="category-count">
                      {category.tools.length} {category.tools.length > 1 ? "links" : "link"}
                    </span>
                  </div>

                  <div className="tool-grid">
                    {category.tools.map((tool) => (
                      <article key={tool.name} className="tool-item">
                        <a
                          className="tool-link"
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="tool-icon">
                            {tool.icon && <img src={tool.icon} alt={tool.name} />}
                          </div>
                          <div className="tool-meta">
                            <h3 className="tool-title">{tool.name}</h3>
                            <span className="tool-url">{tool.link.replace(/^https?:\/\//, "")}</span>
                          </div>
                        </a>
                        {tool.description && (
                          <p className="tool-description">{tool.description}</p>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
