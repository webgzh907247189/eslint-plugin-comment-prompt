

const requireIndex = require("requireindex");

module.exports = {
    rules: requireIndex(__dirname + "/rules"),
    configs: {
        recommended: {
            plugins: ["comment-prompt"],
            rules: {
                "comment-prompt/prompt-comment": "error"
            }
        }
    }
}
