const shoutouts = {
    "afetalpig": "Check out Caboose, I mean Pig's stream at https://www.twitch.tv/afetalpig	",
    "bmmochi": "Check out this just chatting streamer pretending to be an overwatch streamer at twitch.tv/bmmochi.",
    "fitti": "One day, Fitti will stream again. We graciously await that day at twitch.tv/fitti.",
    "iflynick": "One day, he will finish his discord bot. Check out iFlyNick at https://www.twitch.tv/iflynick",
    "lindseybear_": "Check Lindsey out at https://www.twitch.tv/lindseybear_ Just don't get her started on red velvet cake.",
};

function shoutout(target, displayName, url, game) {
    if (target.toLowerCase() in shoutouts) {
        return shoutouts[target.toLowerCase()];
    }
    return `Check out ${displayName} at ${url}. They were last playing ${game}`;
}