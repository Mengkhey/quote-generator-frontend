export async function fetchRandomQuote() {
  try {
    const res = await fetch("http://localhost:4000/api/quotes/random", {
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
    const res = await fetch("http://localhost:4000/api/ai-quote");
    if (!res.ok) throw new Error("Failed to fetch AI quote");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
