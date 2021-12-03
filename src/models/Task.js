import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
      description: {
          type: String,
          trim: true,
          required: true
      },
      completed: {
          type: Boolean,
          default: false
      }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TaskSchema);
