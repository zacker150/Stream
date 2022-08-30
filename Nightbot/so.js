const shoutouts = {
    "afetalpig": "Check out Caboose, I mean Pig's stream at twitch.tv/afetalpig	",
    "bmmochi": "Check out this just chatting streamer pretending to be an Overwatch streamer at twitch.tv/bmmochi.",
    "julov": "Witness the power of the scalable rabbit. twitch.tv/julov",
    "fitti": "One day, Fitti will stream again. We graciously await that day at twitch.tv/fitti.",
    "iflynick": "One day, he will finish his discord bot. Check out iFlyNick at twitch.tv/iflynick",
    "lindseybear_": "Check Lindsey out at twitch.tv/lindseybear_ Just don't get her started on red velvet cake.",
    "moontsukitsuki": "Grab MoonTsukiTsuki a Kombucha at twitch.tv/moontsukitsuki.",
    "kiapiaa": "Kia needs attention. twitch.tv/kiapiaa",
    "fuzhpuzy": "I hear my twin in Fuzh's channel really likes puns. twitch.tv/fuzhpuzy"
};

function shoutout(target, displayName, url, game) {
    if (target.toLowerCase() in shoutouts) {
        return shoutouts[target.toLowerCase()];
    }
    return `Check out ${displayName} at ${url}. They were last playing ${game}`;
}