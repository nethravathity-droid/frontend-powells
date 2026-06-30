const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizePhone(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return digits.slice(1);
  }
  return digits;
}

export function validateEmail(email) {
  return emailRegex.test(String(email).trim());
}

export function validatePhone(phone) {
  return /^[0-9]{10}$/.test(normalizePhone(phone));
}
