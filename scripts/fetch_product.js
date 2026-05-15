/**
 * Fetch a single Amazon product by ASIN or URL.
 *
 * Usage:
 *   export ASA_API_KEY="asa_live_..."
 *   node fetch_product.js B09HN3Q81F
 *   node fetch_product.js B09HN3Q81F co.uk
 *   node fetch_product.js "https://www.amazon.de/dp/B09HN3Q81F" de de_DE
 *
 * Requires Node 18+ (built-in fetch). Get a free key (1,000 requests) at
 * https://app.amazonscraperapi.com
 */

const BASE = "https://api.amazonscraperapi.com/v1";

async function fetchProduct(query, domain = "com", language) {
  const apiKey = process.env.ASA_API_KEY;
  if (!apiKey) {
    throw new Error(
      "ASA_API_KEY env var is not set. Get a free key at https://app.amazonscraperapi.com"
    );
  }
  const url = new URL(`${BASE}/amazon/product`);
  url.searchParams.set("query", query);
  url.searchParams.set("domain", domain);
  if (language) url.searchParams.set("language", language);

  const res = await fetch(url, { headers: { "X-API-Key": apiKey } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status}: ${body}`);
  }
  return res.json();
}

async function main() {
  const [, , query, domain = "com", language] = process.argv;
  if (!query) {
    console.error("Usage: node fetch_product.js <ASIN_or_URL> [domain] [language]");
    process.exit(1);
  }
  const product = await fetchProduct(query, domain, language);
  console.log(JSON.stringify(product, null, 2));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
