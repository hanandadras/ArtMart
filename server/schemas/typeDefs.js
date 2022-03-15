const { gql } = require('apollo-server-express');


//Creation of typeDefs
const typeDefs = gql`
  type Artist {
    _id: ID
    username: String
    email: String
    password: String
    artWork: [ArtWork]
    fans: [Artist]
  }

  type ArtWork {
    _id: ID
    description: String
    image: String
    createdAt: String
    price: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    username: String
  }

  type Query {
    artists: [Artist]
    artist(artist: String!): Artist
    artwork: [ArtWork]
    artWork(artWork: String!): ArtWork
   reactions(username: String): [Reaction]
   reaction(_id: ID!): Reaction
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addArtist(username: String!, email: String!, password: String!): Auth
    addArtWork(descriptionText: String!, price: Number ): ArtWork
    addReaction(reactionText: String!): Reaction
 
 
  }

  type Auth {
    token: ID!
    artist: Artist
  }
`;
//export the typeDefs
module.exports = typeDefs;
