const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

export function validateEmail(email) {
  return emailRegex.test(String(email).trim());
}

export function validatePhone(phone) {
  return phoneRegex.test(String(phone).trim());
}
