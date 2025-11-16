# ashok-nba-mirror

Simple Vercel serverless mirror for NBA CDN scoreboard & boxscore JSON.
Deploy to Vercel (link to repository or upload folder) and use endpoints:

- `/api/scoreboard?date=YYYYMMDD`
- `/api/boxscore?id=0022400234`

Notes:
- This mirror forwards requests to `cdn.nba.com` with browser-like headers (User-Agent, Referer).
- Deploying and running the mirror is subject to nba.com's terms of use.
