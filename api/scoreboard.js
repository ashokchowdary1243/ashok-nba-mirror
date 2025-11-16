import { fetch } from "undici";

export default async function handler(req, res) {
  const { date } = req.query;
  if(!date) {
    return res.status(400).json({ error: "missing date param. use ?date=YYYYMMDD" });
  }
  const url = `https://cdn.nba.com/static/json/liveData/scoreboard/${date}.json`;

  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        "Referer": "https://www.nba.com/"
      }
    });

    if (!r.ok) {
      return res.status(r.status).json({ error: "Upstream error", status: r.status });
    }

    const json = await r.json();
    return res.status(200).json(json);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "mirror failed", detail: String(e) });
  }
}
