const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const artWorkSchema = new Schema(
  {
    description: {
      type: String, 
      required: 'Description:',
      minlength: 1,
      maxlength: 280
    },

    image: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },

    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

artWorkSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ArtWork = model('ArtWork', artWorkSchema);

module.exports = ArtWork;
