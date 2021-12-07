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
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", TaskSchema);
