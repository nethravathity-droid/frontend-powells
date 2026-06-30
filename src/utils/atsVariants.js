const DISPLAY_AMPS = [
  63, 100, 125, 160, 200, 250, 315, 400, 630, 800, 1000, 1250, 1600, 2000, 2500, 3200,
];

const NO_DISPLAY_AMPS = [63, 100, 125, 160, 200, 250, 400, 630];

function buildVariants(prefix, label, amps, image) {
  return amps.map((amp) => ({
    id: `${prefix}-${amp}a`,
    name: `${label} ${amp}A`,
    desc: label,
    image,
  }));
}

export const ATS_WITH_DISPLAY = buildVariants(
  "ats-display",
  "ATS with Display",
  DISPLAY_AMPS,
  "/image/ats125a.png"
);

export const ATS_WITHOUT_DISPLAY = buildVariants(
  "ats-no-display",
  "ATS without Display",
  NO_DISPLAY_AMPS,
  "/image/ats160.png"
);

export const ATS2P_MINI = [
  {
    id: "ats2p-mini-2p-63a",
    name: "Mini ATS 63A 2 Pole",
    desc: "Single phase · Switches Phase & Neutral · 63A rated",
    image: "/image/ats2pole.png",
  },
  {
    id: "ats2p-mini-4p-63a",
    name: "Mini ATS 63A 4 Pole",
    desc: "Three phase · Switches 3 Phases + Neutral · 63A rated",
    image: "/image/ats4pole.png",
  },
];

export const ATS2P_VARIANTS = [...ATS2P_MINI];
