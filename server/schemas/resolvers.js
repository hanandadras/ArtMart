const { Artist, ArtWork } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    artists: async () => {
      try{
      return await Artist.find()
        // .select('-__v -password')
        // .populate('descriptions')
        // .populate('fans');
      }catch(err){
        console.log(err)
        throw new AuthenticationError("cannot find artist")
      }
    },
    artist: async (parent, { artistname }) => {
      return await Artist.findOne({ artistname })
        .select('-__v -password')
        .populate('fans')
        .populate('descriptions');
    },
    artWork: async (parent, { artWork }) => {
      const params = artWork ? { artWork } : {};
      return await ArtWork.find(params).sort({ createdAt: -1 });
    },
    artWork: async (parent, { _id }) => {
      return await ArtWork.findOne({ _id });
    }
  }
};

module.exports = resolvers;

//mutations put delete