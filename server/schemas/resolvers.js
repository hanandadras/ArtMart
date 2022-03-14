const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { Artist, ArtWork } = require('../models');
const { signToken } = require ('../utils/auth');

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
        .populate('fans');
        // .populate('descriptions');
    },
    artWork: async (parent, { artWork }) => {
      const params = artWork ? { artWork } : {};
      return ArtWork.find(params).sort({ createdAt: -1 });
    },
    artWork: async (parent, { _id }) => {
      return ArtWork.findOne({ _id });
    },
  },

  Mutation: {
    addArtist: async (parent, args)=> {
      console.log(args)
      const artist = await Artist.create(args);
      const token = signToken(artist);

      return { artist, token};
    },
    // adding user authentication if wrong email or password is entered by artist
    login: async (parent, { email, password }) => {
      const artist = await Artist.findOne({ email });
    console.log(artist)
      if (!artist) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      const correctPw = await artist.isCorrectPassword(password);
    
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    const token = signToken(artist);
      return { token, artist };
    }
  }
  //addArtwork???
};

module.exports = resolvers;

//mutations put delete