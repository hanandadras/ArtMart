const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const artistSchema = new Schema(
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
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 7
    },
    art_work: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ArtWork'
      }
    ],
    fans: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
artistSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
artistSchema.methods.isCorrectPassword = async function(password) {
  console.log(await bcrypt.hash(password, 10))
  return bcrypt.compare(password, this.password);
};

artistSchema.virtual('fanCount').get(function() {
  return this.fans.length;
});

const Artist = model('Artist', artistSchema);

module.exports = Artist;
