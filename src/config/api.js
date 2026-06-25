export const API_BASE =
  import.meta.env.VITE_API_URL || "https://powells-backend-1.onrender.com";

export async function postJson(path, body) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  return { response, data };
}
