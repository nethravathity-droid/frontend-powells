export const companyInfo = {
  name: "Powells India Corporation",
  tagline: "Electrical manufacturing & industrial automation",
  established: "2023",
  address:
    "No 54, 1st floor, Kachohalli, Bangalore North, Dasanapura Hobli, Bengaluru Urban, Karnataka – 560091",
  phones: ["080 28016867", "+91 8431183166", "+91 9148243088", "+91 7892540406"],
  emails: {
    sales: "sales@powellsindiacorporation.com",
    support: "support@powellsindiacorporation.com",
    purchase: "purchase@powellsindiacorporation.com",
  },
  whatsapp: "918904278956",
};

export const productCatalog = [
  {
    name: "Ammeters",
    category: "Basic Meters",
    path: "/pages/Ammeter",
    keywords: ["ammeter", "ampere", "current meter"],
    description: "Digital ammeters for accurate current measurement in panels and industrial applications.",
  },
  {
    name: "Voltmeters",
    category: "Basic Meters",
    path: "/pages/Voltmeter",
    keywords: ["voltmeter", "voltage meter", "volts"],
    description: "Precision voltmeters for monitoring AC/DC voltage in control panels.",
  },
  {
    name: "AVM Meter",
    category: "Basic Meters",
    path: "/pages/AVM",
    keywords: ["avm", "ampere voltmeter"],
    description: "Combined ammeter and voltmeter for compact panel instrumentation.",
  },
  {
    name: "VAF Meter",
    category: "Basic Meters",
    path: "/pages/vafmeter",
    keywords: ["vaf", "volt amp frequency"],
    description: "Volt-Amp-Frequency meters for comprehensive electrical parameter monitoring.",
  },
  {
    name: "HZ Meter",
    category: "Basic Meters",
    path: "/pages/hzmeter",
    keywords: ["hz", "frequency meter", "hertz"],
    description: "Frequency meters for power quality and grid monitoring.",
  },
  {
    name: "KWH Meter",
    category: "Energy Meters",
    path: "/pages/kwhmeter",
    keywords: ["kwh", "energy meter", "kilowatt hour", "power consumption"],
    description: "Energy meters for tracking electricity consumption in industrial and commercial setups.",
  },
  {
    name: "MFM Meter",
    category: "Energy Meters",
    path: "/pages/mfmmeter",
    keywords: ["mfm", "multifunction meter", "power meter"],
    description: "Multifunction meters for advanced energy and power parameter measurement.",
  },
  {
    name: "ELR & CBCT",
    category: "Protection & Control",
    path: "/pages/Elr",
    keywords: ["elr", "earth leakage", "cbct", "leakage relay"],
    description: "Earth Leakage Relays with CBCT for personnel and equipment protection.",
  },
  {
    name: "MPR Meter",
    category: "Protection & Control",
    path: "/pages/Mpr",
    keywords: ["mpr", "motor protection relay"],
    description: "Motor Protection Relays for safeguarding industrial motors from faults.",
  },
  {
    name: "SPD",
    category: "Protection & Control",
    path: "/pages/SPD",
    keywords: ["spd", "surge", "surge protection", "lightning"],
    description: "Surge Protection Devices (2/3/4 pole) for protecting equipment from voltage spikes.",
  },
  {
    name: "AMF Controller",
    category: "Automation",
    path: "/pages/Amf",
    keywords: ["amf", "automatic mains failure", "generator controller"],
    description: "AMF controllers for automatic generator start/stop during power failure.",
  },
  {
    name: "ATS 2 & 4 Pole",
    category: "Automation",
    path: "/pages/Ats2p",
    keywords: ["ats 2 pole", "ats 4 pole", "transfer switch 2", "transfer switch 4"],
    description: "Automatic Transfer Switches in 2-pole and 4-pole configurations.",
  },
  {
    name: "Automatic Transfer Switch",
    category: "Automation",
    path: "/pages/Ats",
    keywords: ["ats", "automatic transfer switch", "changeover", "power switching"],
    description: "ATS systems for seamless switching between mains and backup power.",
  },
  {
    name: "MCB",
    category: "Switchgear",
    path: "/pages/Mcb",
    keywords: ["mcb", "miniature circuit breaker", "circuit breaker"],
    description: "Miniature Circuit Breakers for overload and short-circuit protection.",
  },
  {
    name: "RCCB",
    category: "Switchgear",
    path: "/pages/Rccb",
    keywords: ["rccb", "rcd", "residual current", "earth fault breaker"],
    description: "RCCBs for protection against earth leakage currents.",
  },
  {
    name: "Isolators",
    category: "Switchgear",
    path: "/pages/Isolator",
    keywords: ["isolator", "isolators", "switch disconnector"],
    description: "Electrical isolator switches for safe circuit isolation during maintenance.",
  },
];

export const quickActions = [
  { label: "All Products", query: "show products" },
  { label: "ATS / Changeover", query: "tell me about ATS" },
  { label: "Energy Meters", query: "energy meters" },
  { label: "Get Quotation", query: "quotation price" },
  { label: "Contact Sales", query: "contact phone email" },
];

export const faqEntries = [
  {
    keywords: ["hello", "hi", "hey", "good morning", "good evening"],
    answer:
      "Hello! I'm the Powells India assistant. I can help you explore our electrical products, ATS systems, energy meters, switchgear, and connect you with our sales team. What are you looking for?",
  },
  {
    keywords: ["about", "company", "who are you", "manufacturing", "factory"],
    answer: `Powells India Corporation is an electrical manufacturing company established in ${companyInfo.established}. We design and manufacture energy meters, ATS panels, AMF controllers, surge protection devices, MCB, RCCB, isolators, and industrial automation products for commercial and industrial applications.`,
    link: { label: "About Us", path: "/pages/About" },
  },
  {
    keywords: ["product", "catalogue", "catalog", "list", "show products", "what do you sell"],
    answer: "We manufacture a full range of electrical products across four categories:",
    listProducts: true,
    link: { label: "View Product Catalogue", path: "/products" },
  },
  {
    keywords: ["meter", "monitoring", "measurement", "ammeter", "voltmeter"],
    answer:
      "Our metering range includes Ammeters, Voltmeters, AVM, VAF, HZ, KWH, and MFM meters — built for panel mounting and industrial accuracy. Which type of meter do you need?",
    suggestProducts: ["Ammeters", "Voltmeters", "KWH Meter", "MFM Meter"],
  },
  {
    keywords: ["ats", "transfer switch", "changeover", "automatic transfer", "backup power"],
    answer:
      "Powells ATS (Automatic Transfer Switch) ensures uninterrupted power by switching between mains and generator/backup supply. We offer 2-pole, 4-pole, with display and without display models.",
    suggestProducts: ["Automatic Transfer Switch", "ATS 2 & 4 Pole"],
    link: { label: "Explore ATS", path: "/pages/Ats" },
  },
  {
    keywords: ["amf", "generator", "mains failure", "dg set"],
    answer:
      "Our AMF (Automatic Mains Failure) controllers automate generator operation during power cuts — ideal for hospitals, industries, and commercial buildings.",
    link: { label: "AMF Controller", path: "/pages/Amf" },
  },
  {
    keywords: ["spd", "surge", "lightning", "protection device"],
    answer:
      "Powells SPD (Surge Protection Devices) protect electrical equipment from voltage surges and lightning. Available in 2-pole, 3-pole, and 4-pole configurations.",
    link: { label: "View SPD", path: "/pages/SPD" },
  },
  {
    keywords: ["mcb", "rccb", "isolator", "switchgear", "breaker", "circuit"],
    answer:
      "Our low-voltage switchgear includes MCB (Miniature Circuit Breakers), RCCB (Residual Current Circuit Breakers), and Isolator switches — engineered for safety and reliability.",
    suggestProducts: ["MCB", "RCCB", "Isolators"],
  },
  {
    keywords: ["elr", "earth leakage", "motor protection", "mpr"],
    answer:
      "For protection & control we offer Earth Leakage Relays (ELR) with CBCT and Motor Protection Relays (MPR) for industrial motor safeguarding.",
    suggestProducts: ["ELR & CBCT", "MPR Meter"],
  },
  {
    keywords: ["price", "cost", "quotation", "quote", "rate", "how much"],
    answer:
      "Pricing depends on product type, specification, and quantity. Share your requirement and our sales team will prepare a quotation.",
    link: { label: "Request Quotation", path: "/pages/Contact" },
  },
  {
    keywords: ["contact", "phone", "email", "call", "reach", "address", "location", "bangalore"],
    answer: `📍 ${companyInfo.address}\n\n📞 ${companyInfo.phones.join(" | ")}\n\n✉️ Sales: ${companyInfo.emails.sales}\n✉️ Support: ${companyInfo.emails.support}`,
    link: { label: "Contact Page", path: "/pages/Contact" },
  },
  {
    keywords: ["dealer", "distributor", "partnership", "bulk", "wholesale"],
    answer:
      "We welcome dealer and distributor enquiries across India. Contact our sales team with your location and business details for partnership opportunities.",
    link: { label: "Contact Sales", path: "/pages/Contact" },
  },
  {
    keywords: ["warranty", "service", "support", "repair", "maintenance"],
    answer:
      "Powells products are built to international quality standards. For warranty, service, or technical support, email support@powellsindiacorporation.com or call our support line.",
    link: { label: "Get Support", path: "/pages/Contact" },
  },
  {
    keywords: ["datasheet", "catalogue", "pdf", "download", "brochure"],
    answer:
      "Product datasheets and catalogues are available on individual product pages. Visit the product section or contact sales for the complete catalogue.",
    link: { label: "Products", path: "/products" },
  },
  {
    keywords: ["industrial", "commercial", "residential", "application", "use case"],
    answer:
      "Powells products serve residential panels, commercial buildings, manufacturing plants, hospitals, data centers, and utility applications — anywhere reliable power monitoring and switching is required.",
  },
  {
    keywords: ["blog", "news", "exhibition", "event"],
    answer:
      "Stay updated with our latest product launches, exhibitions, and industry news on our blog.",
    link: { label: "Latest News", path: "/pages/Blog" },
  },
];

function normalize(text) {
  return text.toLowerCase().trim().replace(/[^\w\s]/g, " ");
}

function scoreMatch(input, keywords) {
  const words = normalize(input).split(/\s+/);
  let score = 0;
  for (const keyword of keywords) {
    const kw = keyword.toLowerCase();
    if (normalize(input).includes(kw)) score += kw.split(" ").length + 2;
    for (const word of words) {
      if (word.length > 2 && kw.includes(word)) score += 1;
      if (word.length > 2 && word.includes(kw)) score += 1;
    }
  }
  return score;
}

function findProduct(input) {
  const normalized = normalize(input);
  let best = null;
  let bestScore = 0;

  for (const product of productCatalog) {
    let score = 0;
    if (normalized.includes(normalize(product.name))) score += 5;
    for (const kw of product.keywords) {
      score += scoreMatch(input, [kw]);
    }
    if (score > bestScore) {
      bestScore = score;
      best = product;
    }
  }

  return bestScore >= 2 ? best : null;
}

function findFaq(input) {
  let best = null;
  let bestScore = 0;

  for (const entry of faqEntries) {
    const score = scoreMatch(input, entry.keywords);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore >= 2 ? best : null;
}

export function getAssistantResponse(input) {
  const trimmed = input.trim();
  if (!trimmed) {
    return {
      text: "Please type a message or choose a quick option below.",
      suggestions: quickActions.map((a) => a.query),
    };
  }

  const product = findProduct(trimmed);
  if (product) {
    return {
      text: `${product.name} (${product.category})\n\n${product.description}`,
      link: { label: `View ${product.name}`, path: product.path },
      suggestions: ["Get Quotation", "Contact Sales"],
    };
  }

  const faq = findFaq(trimmed);
  if (faq) {
    const response = { text: faq.answer, link: faq.link || null };

    if (faq.listProducts) {
      const grouped = {};
      for (const p of productCatalog) {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p.name);
      }
      const lines = Object.entries(grouped).map(
        ([cat, items]) => `• ${cat}: ${items.join(", ")}`
      );
      response.text += "\n\n" + lines.join("\n");
    }

    if (faq.suggestProducts) {
      response.suggestions = faq.suggestProducts;
    }

    return response;
  }

  return {
    text:
      "I couldn't find an exact match. Powells manufactures energy meters, ATS/AMF systems, SPD, MCB, RCCB, isolators, and protection relays.\n\nTry asking about a specific product, request a quotation, or contact our sales team.",
    suggestions: ["All Products", "Get Quotation", "Contact Sales"],
    link: { label: "Contact Us", path: "/pages/Contact" },
  };
}

export function resolveSuggestion(label) {
  const action = quickActions.find(
    (a) => a.label.toLowerCase() === label.toLowerCase()
  );
  if (action) return getAssistantResponse(action.query);

  const product = productCatalog.find(
    (p) => p.name.toLowerCase() === label.toLowerCase()
  );
  if (product) return getAssistantResponse(product.name);

  const map = {
    "get quotation": "quotation price",
    "contact sales": "contact phone email",
    "all products": "show products",
  };
  const query = map[label.toLowerCase()] || label;
  return getAssistantResponse(query);
}
