var comment = new mongoose.Schema({
  username: String,
  comment: String,
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

module.exports = mongoose.model("Post", postSchema);
