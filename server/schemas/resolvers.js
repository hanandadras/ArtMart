const { Artist, ArtWork } = require('../models');

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
    artWork: async (parent, { artWork }) => {
      const params = artWork ? { artWork } : {};
      return ArtWork.find(params).sort({ createdAt: -1 });
    },
    artWork: async (parent, { _id }) => {
      return ArtWork.findOne({ _id });
    }
  }
};

module.exports = resolvers;

//mutations put delete