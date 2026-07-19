import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  POSTER_AD,
  SHOW_PERSISTENT_POSTER_AD,
  SHOW_WELCOME_POSTER,
} from "../config/site";
import "./PosterAd.css";

const PERSISTENT_DISMISS_KEY = "powells-poster-ad-dismissed";
const WELCOME_SEEN_KEY = "powells-poster-welcome-seen";

export default function PosterAd() {
  const [persistentDismissed, setPersistentDismissed] = useState(true);
  const [expandModalOpen, setExpandModalOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  useEffect(() => {
    if (SHOW_PERSISTENT_POSTER_AD) {
      setPersistentDismissed(
        sessionStorage.getItem(PERSISTENT_DISMISS_KEY) === "true"
      );
    }
  }, []);

  useEffect(() => {
    if (!SHOW_WELCOME_POSTER) return;
    if (sessionStorage.getItem(WELCOME_SEEN_KEY) === "true") return;

    const timer = window.setTimeout(() => setWelcomeOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const showBar = SHOW_PERSISTENT_POSTER_AD && !persistentDismissed;
    document.body.classList.toggle("has-poster-ad-bar", showBar);
    return () => document.body.classList.remove("has-poster-ad-bar");
  }, [persistentDismissed]);

  const dismissPersistent = () => {
    sessionStorage.setItem(PERSISTENT_DISMISS_KEY, "true");
    setPersistentDismissed(true);
    setExpandModalOpen(false);
  };

  const closeWelcome = () => {
    sessionStorage.setItem(WELCOME_SEEN_KEY, "true");
    setWelcomeOpen(false);
  };

  return (
    <>
      {/* Welcome popup — shown once when the website is opened (per session) */}
      {SHOW_WELCOME_POSTER && welcomeOpen && (
        <div
          className="poster-ad-modal-backdrop poster-ad-welcome-backdrop"
          onClick={closeWelcome}
          role="presentation"
        >
          <div
            className="poster-ad-modal poster-ad-welcome"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Welcome poster"
          >
            <button
              type="button"
              className="poster-ad-modal__close"
              onClick={closeWelcome}
              aria-label="Close"
            >
              ×
            </button>
            <img src={POSTER_AD.src} alt={POSTER_AD.alt} />
            <Link
              to={POSTER_AD.link}
              className="poster-ad-modal__cta"
              onClick={closeWelcome}
            >
              {POSTER_AD.label}
            </Link>
          </div>
        </div>
      )}

      {/* Persistent bottom bar — disabled by default; set SHOW_PERSISTENT_POSTER_AD in site.js */}
      {SHOW_PERSISTENT_POSTER_AD && !persistentDismissed && (
        <>
          <aside className="poster-ad-bar" aria-label="Promotional poster">
            <Link to={POSTER_AD.link} className="poster-ad-bar__link">
              <img src={POSTER_AD.src} alt={POSTER_AD.alt} />
              <span className="poster-ad-bar__label">{POSTER_AD.label}</span>
            </Link>
            <button
              type="button"
              className="poster-ad-bar__expand"
              onClick={() => setExpandModalOpen(true)}
              aria-label="View full poster"
            >
              View
            </button>
            <button
              type="button"
              className="poster-ad-bar__close"
              onClick={dismissPersistent}
              aria-label="Close poster ad"
            >
              ×
            </button>
          </aside>

          {expandModalOpen && (
            <div
              className="poster-ad-modal-backdrop"
              onClick={() => setExpandModalOpen(false)}
              role="presentation"
            >
              <div
                className="poster-ad-modal"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label="Promotional poster"
              >
                <button
                  type="button"
                  className="poster-ad-modal__close"
                  onClick={() => setExpandModalOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
                <img src={POSTER_AD.src} alt={POSTER_AD.alt} />
                <Link to={POSTER_AD.link} className="poster-ad-modal__cta">
                  {POSTER_AD.label}
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export function FooterPosterAd() {
  if (!SHOW_PERSISTENT_POSTER_AD) return null;

  return (
    <section className="footer-poster-ad" aria-label="Promotional poster">
      <Link to={POSTER_AD.link} className="footer-poster-ad__link">
        <img src={POSTER_AD.src} alt={POSTER_AD.alt} loading="lazy" />
      </Link>
    </section>
  );
}
