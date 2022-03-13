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
    price: Number
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    paasword: String
  }



  type Query {
    artists: [Artist]
    artist(artist: String!): Artist
    artwork: [ArtWork]
    artWork(artWork: String!): ArtWork
   reactions(username: String): [Reaction]
   reaction(_id: ID!): Reaction
  }
`;
//export the typeDefs
module.exports = typeDefs;
