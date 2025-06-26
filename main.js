const watchTime = [
    {
        "id": "UkLWZg9DAJ",
        "watchSecs": 3792,
        "isEpisodical": false,
        "lastWatchedAt": "2025-06-01T23:24:25+00:00"
    },
    {
        "id": "gbHJdmfrXB",
        "watchSecs": 120,
        "isEpisodical": true,
        "season": 1,
        "episode": 2,
        "lastWatchedAt": "2025-05-16T20:21:22+00:00"
    },
    {
        "id": "EfhxLZ9ck8",
        "watchSecs": 1560,
        "isEpisodical": true,
        "season": 3,
        "episode": 8,
        "lastWatchedAt": "2025-05-01T10:11:12+00:00"
    },
    {
        "id": "VqXmZF31wY",
        "watchSecs": 3360,
        "isEpisodical": true,
        "season": 5,
        "episode": 1,
        "lastWatchedAt": "2025-04-25T13:14:15+00:00"
    },
    {
        "id": "uw2YK1rnl0",
        "watchSecs": 8700,
        "lastWatchedAt": "2025-04-03T09:10:11+00:00"
    },
    {
        "id": "OIJLhNcSbf",
        "watchSecs": 4020,
        "isEpisodical": true,
        "isLastEpisode": true,
        "season": 1,
        "episode": 8,
        "lastWatchedAt": "2025-03-13T19:18:17+00:00"
    },
    {
        "id": "AXs1igzRC6",
        "watchSecs": 60,
        "isEpisodical": true,
        "season": 7,
        "episode": 3,
        "lastWatchedAt": "2025-02-28T12:11:10+00:00"
    },
    {
        "id": "p6klVeMgbn",
        "watchSecs": 2160,
        "isEpisodical": true,
        "season": 1,
        "episode": 12,
        "lastWatchedAt": "2024-11-12T19:18:17+00:00"
    },
    {
        "id": "nJqfPa3Cpe",
        "watchSecs": 6180,
        "lastWatchedAt": null
    },
    {
        "id": "98FqgRua4h",
        "watchSecs": 1560,
        "season": 2,
        "episode": 9,
        "isEpisodical": true,
        "lastWatchedAt": null
    }
]

function extractWatchHistory(watchTime, history, region = 'default') {
    return {
        items: watchTime.map ((entry) => {
            const meta = history[entry.id] || {};
            const total_secs = meta.length ? meta.length * 60 : 5400;
            const title = meta?.regionalTitles?.[region] || meta.title || "Unknown";

            return {
                id: entry.id,
                date_watched: entry.lastWatchedAt || new Date().toISOString(),
                watch_secs: entry.watchSecs,
                total_secs,
                title: meta.title || "Unknown",
                episode_title: entry.isEpisodical ? `Episode ${entry.episode}` : '',
                episode_number: entry.episode ?? null,
                season_number: entry.season ?? null,
            }
        })
    }
}

const dataPageAttr = document.querySelector('#app')?.getAttribute('data-page');
const decoded = new DOMParser().parseFromString(`<body>${dataPageAttr}</body>`, 'text/html').body.textContent;

try {
    const parsed = JSON.parse(decoded);
    const history = parsed?.props?.history;

    if (!history) {
        console.log("Could not find required history data");
    } else {
        const region = navigator.language.startsWith("es") ? "es" : "default";

        const output = extractWatchHistory(watchTime, history, region);

        console.log("Final Output:");
        console.log(JSON.stringify(output, null, 2));
    }
} catch (error) {
    console.error("Could not parse embedded data", error);
}