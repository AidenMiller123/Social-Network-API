const { Schema, model, Types } = require('mongoose');

// Schema for reactions 
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username:
  {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})


// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username:
    {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// Virtual that gets the total amount of reactions for a thought
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// Creates a thought model using the thought schema
const Thought = model('thought', thoughtSchema);
// exports the Thought model
module.exports = Thought;
