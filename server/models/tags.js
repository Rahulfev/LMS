const mongoose = require("mongoose");

// Define the RatingAndReview schema
const tagsSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,

    },
    description: {
        type: string

    },

    course: {
        type: mongoose.Schema.Types.ObjectId,

        ref: "Course",

    },
});

// Export the RatingAndReview model
module.exports = mongoose.model("Tag", tagsSchema);
