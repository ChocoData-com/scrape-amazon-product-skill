# scrape-amazon-product

A Claude Skill that teaches AI agents how to fetch live Amazon product data (title, price, rating, reviews, brand, availability, variants, images) for any ASIN across 20 marketplaces, using the [Amazon Scraper API](https://amazonscraperapi.com).

## Quick start

```bash
export ASA_API_KEY=asa_live_...   # get one free (1000 requests) at https://app.amazonscraperapi.com
```

Then load the `SKILL.md` into your AI client (Claude Code, Cowork, Codex, or any compatible skill runtime). Triggers when the user mentions "Amazon product", "scrape Amazon", "ASIN lookup", "Amazon price", and similar.

See [`SKILL.md`](./SKILL.md) for the full skill content and [`scripts/`](./scripts/) for runnable Python and Node examples.

## What's in this repo

| File | Purpose |
|---|---|
| `SKILL.md` | The skill itself: frontmatter, trigger phrasing, API contract, code examples, common workflows, pitfalls |
| `README.md` (in skill dir) | Human-readable summary for browsers |
| `scripts/fetch_product.py` | Runnable Python reference |
| `scripts/fetch_product.js` | Runnable Node reference |

## Related

- [Amazon Scraper API](https://amazonscraperapi.com) - the underlying API (1000 free requests on signup)
- [`scrape-amazon-search-results-skill`](https://github.com/ChocoData-com/scrape-amazon-search-results-skill) - companion skill for keyword search
- [`amazon-scraper-api-mcp`](https://github.com/ChocoData-com/amazon-scraper-api-mcp) - MCP server for Claude Desktop, Cursor, Continue
- [`n8n-nodes-amazonscraperapi`](https://github.com/ChocoData-com/n8n-nodes-amazonscraperapi) - n8n community node

## License

MIT
