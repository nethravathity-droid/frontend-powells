const DISPLAY_AMPS = [
  63, 100, 125, 160, 200, 250, 315, 400, 630, 800, 1000, 1250, 1600, 2000, 2500, 3200,
];

const NO_DISPLAY_AMPS = [63, 100, 125, 160, 200, 250, 400, 630];

const ATS2P_AMPS = [16, 20, 25, 32, 40, 50, 63];

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

export const ATS2P_2POLE = buildVariants(
  "ats2p-2p",
  "ATS 2 Pole",
  ATS2P_AMPS,
  "/image/ats2pole.png"
);

export const ATS2P_4POLE = buildVariants(
  "ats2p-4p",
  "ATS 4 Pole",
  ATS2P_AMPS,
  "/image/ats4pole.png"
);

export const ATS2P_VARIANTS = [...ATS2P_2POLE, ...ATS2P_4POLE];
