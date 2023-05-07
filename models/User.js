const { Schema, model } = require('mongoose');


// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
// Virtuals tgat gets that total amount of friends a user has
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });
// creates a user model using the user schema
const User = model('user', userSchema);

// exports the User model
module.exports = User;
