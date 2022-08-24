const shoutouts = {
    "bmmochi": "Check out this just chatting streamer pretending to be an overwatch streamer at twitch.tv/bmmochi."
};

function shoutout(target, url, game) {
    if (target in shoutouts) {
        return shoutouts[target];
    }
    return `Check out ${target} at ${url}. They were last playing ${game}`;
}