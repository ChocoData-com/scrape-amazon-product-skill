"""
Fetch a single Amazon product by ASIN or URL.

Usage:
    export ASA_API_KEY="asa_live_..."
    python fetch_product.py B09HN3Q81F
    python fetch_product.py B09HN3Q81F co.uk
    python fetch_product.py "https://www.amazon.de/dp/B09HN3Q81F" de de_DE

Get a free key (1,000 requests) at https://app.amazonscraperapi.com
"""
import json
import os
import sys
import requests

BASE = "https://api.amazonscraperapi.com/v1"


def fetch_product(query: str, domain: str = "com", language: str | None = None) -> dict:
    api_key = os.environ.get("ASA_API_KEY")
    if not api_key:
        raise SystemExit("ASA_API_KEY env var is not set. Get a free key at https://app.amazonscraperapi.com")
    params = {"query": query, "domain": domain}
    if language:
        params["language"] = language
    resp = requests.get(
        f"{BASE}/amazon/product",
        params=params,
        headers={"X-API-Key": api_key},
        timeout=30,
    )
    resp.raise_for_status()
    return resp.json()


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    query = sys.argv[1]
    domain = sys.argv[2] if len(sys.argv) > 2 else "com"
    language = sys.argv[3] if len(sys.argv) > 3 else None
    product = fetch_product(query, domain=domain, language=language)
    print(json.dumps(product, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
