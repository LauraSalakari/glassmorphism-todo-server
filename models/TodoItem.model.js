const {Schema, model} = require("mongoose")

const todoItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    details: String,
    completed: Boolean,
    list: {
      type: Schema.Types.ObjectId,
      ref: "TodoList",
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("TodoItem", todoItemSchema)