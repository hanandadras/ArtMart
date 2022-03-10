const { Artist, Description } = require('../models');

const resolvers = {
  Query: {
    artists: async () => {
      return Artist.find()
        .select('-__v -password')
        .populate('descriptions')
        .populate('fans');
    },
    artist: async (parent, { artistname }) => {
      return Artist.findOne({ artistname })
        .select('-__v -password')
        .populate('fans')
        .populate('descriptions');
    },
    descriptions: async (parent, { artistname }) => {
      const params = artistname ? { artistname } : {};
      return Description.find(params).sort({ createdAt: -1 });
    },
    description: async (parent, { _id }) => {
      return Description.findOne({ _id });
    }
  }
};

module.exports = resolvers;
