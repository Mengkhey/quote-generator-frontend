const BASE_URL = "https://quote-generator-backend-kt9l.onrender.com"; 

export async function fetchRandomQuote() {
  try {
    const res = await fetch(`${BASE_URL}/api/quotes/random`, {
      cache: "no-store", // always fresh
    });
    if (!res.ok) throw new Error("Failed to fetch quote");
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchAIQuote() {
  try {
    const res = await fetch(`${BASE_URL}/api/ai-quote`);
    if (!res.ok) throw new Error("Failed to fetch AI quote");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
