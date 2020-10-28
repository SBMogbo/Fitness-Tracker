const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "please enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "please enter exercise name",
      },
      duration: {
        type: Number,
        required: "please enter duration type",
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number
      },
    },
  ],

}, {
  toJSON: {
    virtuals: true
  }
})
workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((total,exercise)=>{
    return total + exercise.duration
  },0);
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
