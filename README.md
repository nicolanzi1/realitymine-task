# RealityMine Take-Home JavaScript Task

This is a submission for the RealityMine watch history extraction challenge.

The task was to extract watch history data from: [https://realityflix.rmdev.zone](https://realityflix.rmdev.zone), using only **vanilla JavaScript** via the browser DevTools and output it in the following format:

```json
{
    "items": [
        {
            "id": "abcd1234",
            "date_watched": "2025-04-03T09:10:11+00:00",
            "watch_secs": 123,
            "total_secs": 456,
            "title": "An Exciting Show Title",
            "episode_title": "Episode 1",
            "episode_number": 1,
            "season_number": 1
        }
    ]
}
```

How to Run the Script
1. Go to [https://realityflix.rmdev.zone/en/watch-history](https://realityflix.rmdev.zone/en/watch-history)
2. Open DevTools -> go to the Network tab
3. Click on reload page, go to the Response tab, and copy the watchTime array of objects
5. Still in DevTools -> go to the Console tab
6. Add the following:
7. ```js
       const watchTime =
   ```
8. Then, paste the watchTime array of objects you previously copied
9. After, paste the full script from main.js (not including the fallback const watchTime array - Line 77 onwards)
10. Press Enter to run it

The extracted output will be logged as a formatted JSON object, as follows:

```json
{
  "items": [
    {
      "id": "UkLWZg9DAJ",
      "date_watched": "2025-06-01T23:24:25+00:00",
      "watch_secs": 3792,
      "total_secs": 7860,
      "title": "The Clickstream",
      "episode_title": "",
      "episode_number": null,
      "season_number": null
    },
    {
      "id": "gbHJdmfrXB",
      "date_watched": "2025-05-16T20:21:22+00:00",
      "watch_secs": 120,
      "total_secs": 3420,
      "title": "Browsing Habits: Episode 2",
      "episode_title": "Episode 2",
      "episode_number": 2,
      "season_number": 1
    },
    {
      "id": "EfhxLZ9ck8",
      "date_watched": "2025-05-01T10:11:12+00:00",
      "watch_secs": 1560,
      "total_secs": 1560,
      "title": "Incognito Mode: S3 E8",
      "episode_title": "Episode 8",
      "episode_number": 8,
      "season_number": 3
    },
    {
      "id": "VqXmZF31wY",
      "date_watched": "2025-04-25T13:14:15+00:00",
      "watch_secs": 3360,
      "total_secs": 3480,
      "title": "Terms & Conditions: CookieSnatch",
      "episode_title": "Episode 1",
      "episode_number": 1,
      "season_number": 5
    },
    {
      "id": "uw2YK1rnl0",
      "date_watched": "2025-04-03T09:10:11+00:00",
      "watch_secs": 8700,
      "total_secs": 8700,
      "title": "Buffering",
      "episode_title": "",
      "episode_number": null,
      "season_number": null
    },
    {
      "id": "OIJLhNcSbf",
      "date_watched": "2025-03-13T19:18:17+00:00",
      "watch_secs": 4020,
      "total_secs": 4020,
      "title": "User 237: The Conclusion",
      "episode_title": "Episode 8",
      "episode_number": 8,
      "season_number": 1
    },
    {
      "id": "AXs1igzRC6",
      "date_watched": "2025-02-28T12:11:10+00:00",
      "watch_secs": 60,
      "total_secs": 1560,
      "title": "Cookies Enabled",
      "episode_title": "Episode 3",
      "episode_number": 3,
      "season_number": 7
    },
    {
      "id": "p6klVeMgbn",
      "date_watched": "2024-11-12T19:18:17+00:00",
      "watch_secs": 2160,
      "total_secs": 2700,
      "title": "Pageviews E12",
      "episode_title": "Episode 12",
      "episode_number": 12,
      "season_number": 1
    },
    {
      "id": "nJqfPa3Cpe",
      "date_watched": "2025-06-26T15:36:13.229Z",
      "watch_secs": 6180,
      "total_secs": 6300,
      "title": "Session Timeout",
      "episode_title": "",
      "episode_number": null,
      "season_number": null
    },
    {
      "id": "98FqgRua4h",
      "date_watched": "2025-06-26T15:36:13.229Z",
      "watch_secs": 1560,
      "total_secs": 1560,
      "title": "The Consent Dialogues: S2, The JQuery Conundrum",
      "episode_title": "Episode 9",
      "episode_number": 9,
      "season_number": 2
    }
  ]
}
```

Enhancements Implemented
- Pure function extractWatchHistory() -> Testable and reusable
- Regional awareness -> Supports region-based fallback titles
- Bandwith conscious -> Avoids assumptions and defaults sensibly
- Edge case safe -> Handles missing or partial data gracefully

How to test it
If you want to simulate/test custom input directly, add the following function to the console to verify it works with different input:

extractWatchHistory(watchTime, { "UKLWZg9DAJ"; { title: "My Custom Show", length: 90 } })

This will return:
```json
[
    {
        "id": "UkLWZg9DAJ",
        "date_watched": "2025-06-01T23:24:25+00:00",
        "watch_secs": 3792,
        "total_secs": 5400,
        "title": "My Custom Show",
        "episode_title": "",
        "episode_number": null,
        "season_number": null
    },
    {
        "id": "gbHJdmfrXB",
        "date_watched": "2025-05-16T20:21:22+00:00",
        "watch_secs": 120,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "Episode 2",
        "episode_number": 2,
        "season_number": 1
    },
    {
        "id": "EfhxLZ9ck8",
        "date_watched": "2025-05-01T10:11:12+00:00",
        "watch_secs": 1560,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "Episode 8",
        "episode_number": 8,
        "season_number": 3
    },
    {
        "id": "VqXmZF31wY",
        "date_watched": "2025-04-25T13:14:15+00:00",
        "watch_secs": 3360,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "Episode 1",
        "episode_number": 1,
        "season_number": 5
    },
    {
        "id": "uw2YK1rnl0",
        "date_watched": "2025-04-03T09:10:11+00:00",
        "watch_secs": 8700,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "",
        "episode_number": null,
        "season_number": null
    },
    {
        "id": "OIJLhNcSbf",
        "date_watched": "2025-03-13T19:18:17+00:00",
        "watch_secs": 4020,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "Episode 8",
        "episode_number": 8,
        "season_number": 1
    },
    {
        "id": "AXs1igzRC6",
        "date_watched": "2025-02-28T12:11:10+00:00",
        "watch_secs": 60,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "Episode 3",
        "episode_number": 3,
        "season_number": 7
    },
    {
        "id": "p6klVeMgbn",
        "date_watched": "2024-11-12T19:18:17+00:00",
        "watch_secs": 2160,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "Episode 12",
        "episode_number": 12,
        "season_number": 1
    },
    {
        "id": "nJqfPa3Cpe",
        "date_watched": "2025-06-26T14:58:08.582Z",
        "watch_secs": 6180,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "",
        "episode_number": null,
        "season_number": null
    },
    {
        "id": "98FqgRua4h",
        "date_watched": "2025-06-26T14:58:08.582Z",
        "watch_secs": 1560,
        "total_secs": 5400,
        "title": "Unknown",
        "episode_title": "Episode 9",
        "episode_number": 9,
        "season_number": 2
    }
]
```

Files
- main.js -> Full runnable script with all logic
- README.md -> this file

Final notes
This was kept intentionally simple and alligned with the brief:
- No frameworks or build tools
- No split modules or bundlers
- Everything runs cleanly inside the browser DevTools
