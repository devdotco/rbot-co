"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { megaMenus, MegaCol } from "@/lib/nav-data";

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((id: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(id);
  }, []);

  const scheduleClose = useCallback(() => {
    timerRef.current = setTimeout(() => setOpen(null), 160);
  }, []);

  const cancelClose = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const closeAll = useCallback(() => {
    setOpen(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeAll(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={closeAll}>
            R<em>B</em>OT
          </Link>

          <div className="nav-links">
            {Object.entries(megaMenus).map(([key, menu]) => (
              <button
                key={key}
                className={`nav-link${open === key ? " active" : ""}`}
                onMouseEnter={() => openMenu(key)}
                onMouseLeave={scheduleClose}
              >
                {menu.label}
              </button>
            ))}
          </div>

          <div className="nav-right">
            <Link href="/company/contact" className="nav-signin">Sign In</Link>
            <Link href="/assessment" className="btn btn-p btn-sm">Deploy Robots</Link>
          </div>

          <button
            className="nav-burger"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`mega-backdrop${open ? " open" : ""}`}
        onClick={() => setOpen(null)}
        aria-hidden
      />

      {/* Mega panels */}
      <div className="mega-wrap">
        {Object.entries(megaMenus).map(([key, menu]) => (
          <div
            key={key}
            className={`mega-panel${open === key ? " open" : ""}`}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            aria-hidden={open !== key}
          >
            <div className="mega-inner" style={{ gridTemplateColumns: menu.columns }}>
              {menu.cols.map((col: MegaCol, i: number) =>
                col.type === "featured" ? (
                  <div key={i} className="mega-feat">
                    <div className="mega-feat-eyebrow">{col.eyebrow}</div>
                    <div className="mega-feat-title">{col.title}</div>
                    <div className="mega-feat-desc">{col.desc}</div>
                    <Link href={col.href} className="btn btn-p btn-sm" onClick={closeAll}>
                      {col.cta}
                    </Link>
                  </div>
                ) : (
                  <div key={i} className="mega-col">
                    <div className="mega-col-lbl">{col.label}</div>
                    <ul className="mega-links">
                      {col.links.map((link, j) => (
                        <li key={j}>
                          <Link
                            href={link.href}
                            className={link.more ? "more" : ""}
                            onClick={closeAll}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {Object.entries(megaMenus).map(([key, menu]) => (
          <Link key={key} href={`/${key}`} className="mob-nav-link" onClick={closeAll}>
            {menu.label}
          </Link>
        ))}
        <div className="mob-cta">
          <Link
            href="/assessment"
            className="btn btn-p"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={closeAll}
          >
            Deploy Robots
          </Link>
        </div>
      </div>
    </>
  );
}
