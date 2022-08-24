const shoutouts = {
    "bmmochi": "Check out this just chatting streamer pretending to be an overwatch streamer at twitch.tv/bmmochi."
};

function shoutout(target) {
    if (target in shoutouts) {
        return shoutouts[target];
    }
    return "$($(twitch $(touser) \"Check out {{displayName}} at {{url}}. They were last playing {{game}}\"))";
}