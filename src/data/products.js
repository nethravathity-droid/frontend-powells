export const PRODUCTS = [
  { id: "ammeter", name: "Ammeters", price: 2499, image: "/image/mt3.png", path: "/pages/Ammeter", category: "Basic Meters" },
  { id: "voltmeter", name: "Voltmeters", price: 2299, image: "/image/volt1.png", path: "/pages/Voltmeter", category: "Basic Meters" },
  { id: "avm", name: "AVM Meter", price: 3499, image: "/image/avm.png", path: "/pages/AVM", category: "Basic Meters" },
  { id: "vafmeter", name: "VAF Meter", price: 3299, image: "/image/mt5.png", path: "/pages/vafmeter", category: "Basic Meters" },
  { id: "hzmeter", name: "HZ Meter", price: 2199, image: "/image/hz.png", path: "/pages/hzmeter", category: "Basic Meters" },
  { id: "kwhmeter", name: "KWH Meter", price: 4599, image: "/image/kwh.png", path: "/pages/kwhmeter", category: "Energy Meters" },
  { id: "mfmmeter", name: "MFM Meter", price: 4899, image: "/image/mfm.png", path: "/pages/mfmmeter", category: "Energy Meters" },
  { id: "elr", name: "ELR & CBCT", price: 5699, image: "/image/elr.png", path: "/pages/Elr", category: "Protection" },
  { id: "mpr", name: "MPR Meter", price: 6299, image: "/image/Mpr.png", path: "/pages/Mpr", category: "Protection" },
  { id: "spd", name: "SPD", price: 1899, image: "/image/spd4.jpg", path: "/pages/SPD", category: "Protection" },
  { id: "amf", name: "AMF Controller", price: 8999, image: "/image/amf.png", path: "/pages/Amf", category: "Automation" },
  { id: "ats2p", name: "ATS 2 & 4 Pole", price: 12499, image: "/image/ats4pole.png", path: "/pages/Ats2p", category: "Automation" },
  { id: "ats", name: "Automatic Transfer Switch", price: 14999, image: "/image/ats250.png", path: "/pages/Ats", category: "Automation" },
  { id: "mcb", name: "MCB (MCCB)", price: 899, image: "/image/4pole_mcb.png", path: "/pages/Mcb", category: "Switchgear" },
  { id: "rccb", name: "RCCB", price: 1299, image: "/image/rccb_4pole.png", path: "/pages/Rccb", category: "Switchgear" },
  { id: "isolator", name: "Isolators", price: 1599, image: "/image/isolators.png", path: "/pages/Isolator", category: "Switchgear" },
  { id: "dbbox", name: "DB Box", price: 2499, image: "/image/digital_timers.png", path: "/pages/DbBox", category: "Switchgear" },
  { id: "mcb-1p", name: "1 Pole MCB", price: 499, image: "/image/1p_mcb.png", path: "/pages/Mcb", category: "Switchgear", parentId: "mcb" },
  { id: "mcb-2p", name: "2 Pole MCB", price: 699, image: "/image/2pole_mcb.png", path: "/pages/Mcb", category: "Switchgear", parentId: "mcb" },
  { id: "mcb-3p", name: "3 Pole MCB", price: 799, image: "/image/3pole_mcb.png", path: "/pages/Mcb", category: "Switchgear", parentId: "mcb" },
  { id: "mcb-4p", name: "4 Pole MCB", price: 899, image: "/image/4pole_mcb.png", path: "/pages/Mcb", category: "Switchgear", parentId: "mcb" },
  { id: "vm9601", name: "VM9601 Voltmeter", price: 2199, image: "/image/volt1.png", path: "/pages/Voltmeter", category: "Basic Meters", parentId: "voltmeter" },
  { id: "vm9603", name: "VM9603 Voltmeter", price: 2399, image: "/image/volt2.png", path: "/pages/Voltmeter", category: "Basic Meters", parentId: "voltmeter" },
  { id: "vm4801", name: "VM4801 Voltmeter", price: 2099, image: "/image/volt3.png", path: "/pages/Voltmeter", category: "Basic Meters", parentId: "voltmeter" },
  { id: "vm96dc", name: "VM96DC Voltmeter", price: 2599, image: "/image/volt1.png", path: "/pages/Voltmeter", category: "Basic Meters", parentId: "voltmeter" },
  { id: "vm48dc", name: "VM48DC Voltmeter", price: 2499, image: "/image/volt2.png", path: "/pages/Voltmeter", category: "Basic Meters", parentId: "voltmeter" },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductByPath(pathname) {
  return PRODUCTS.find((p) => p.path === pathname && !p.parentId);
}
