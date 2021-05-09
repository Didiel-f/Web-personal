const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const NewsletterSchema = Schema({
    email: {
        type: String,
        unique: true
    }
});

module.exports = moongoose.model("Newsletter", NewsletterSchema);