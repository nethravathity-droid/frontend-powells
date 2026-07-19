/** Set VITE_SHOW_CHANNEL_PARTNER=true in .env to show nav links on the live site */
export const SHOW_CHANNEL_PARTNER =
  import.meta.env.VITE_SHOW_CHANNEL_PARTNER === "true";

export const POSTER_AD = {
  src: "/image/poster.jpeg",
  alt: "Powells India Corporation — Latest updates & exhibition",
  link: "/pages/Blog",
  label: "View Latest Updates",
};

/** Bottom bar + footer poster (off by default) */
export const SHOW_PERSISTENT_POSTER_AD = false;

/** One-time welcome popup when the site is opened (per browser session) */
export const SHOW_WELCOME_POSTER = true;
