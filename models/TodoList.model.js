const {Schema, model} = require("mongoose");

const todoListSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    colour: String,
    
  },
  {
    timestamps: true
  }
)

todoListSchema.index({"title": 1}, {unique: true})
module.exports = model("TodoList", todoListSchema);